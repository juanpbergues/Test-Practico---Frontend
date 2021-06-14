import React, { useState, useEffect, Fragment } from 'react'
import { useHistory } from "react-router-dom";
import Spinner from 'components/Utils/Spinner'
import { searchProducts } from 'api/search'
import { withRouter } from 'react-router-dom'

const Productos = (props) => {
    const history = useHistory();
    const query = props.location.state ? props.location.state.query : ''

    const handleRouteProductDetail = (id) => {
        history.push(`/items/${id}`);
    }

    const [products, setProducts] = useState(null)
    const [categories, setCategories] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function searchProductsApi(query) {
            try {
                const resultado = await searchProducts(query)
                console.log(resultado)
                if (resultado.status === "OK") {
                    setProducts(resultado.data.items)
                    setCategories(resultado.data.categories)
                    setLoading(false)
                } else {
                    console.log()
                    setLoading(false)
                }
            } catch (err) {
                alert("se produjo un error");
            }
        }
        searchProductsApi(query)
    }, [query])

    return (
        <>
            {loading ? (
                <div >
                    <Spinner />
                </div>
            ) : (
                <>
                    {products && categories ? (
                        <>
                            <div className='breadcrumbs'>
                                {
                                    categories.map((category, index) => (
                                        <Fragment key={category.id}>
                                            <p className='breadcrumb-item' >{index === 0 ? '' : '>'}</p>
                                            <p className='breadcrumb-item' >{category.name} </p>
                                        </Fragment>
                                    ))
                                }
                            </div>
                        {products.map((product) => (
                            <div
                                className="card"
                                onClick={() => handleRouteProductDetail(product.id)}
                                key={product.id}
                            >
                                <img src={product.picture} alt="Imagen" style={{ width: '25%' }} />
                                <div className="container">
                                    <div>
                                        <h2 style={{ display: 'flex' }} >$ {product.price.amount},{product.price.decimals ? product.price.decimals : '00'}</h2>
                                        <h3>{product.title}</h3>
                                    </div>
                                    <div className='card-ubicacion'>
                                        <p className='text-marker'></p>  {/* Aca iria la UBICACION pero no esta contenplada en el objeto solicitado */}
                                    </div>
                                </div>
                            </div>
                            ))}
                        </>
                    ) : (
                        <div>
                            No existen resultados para mostrar
                        </div>
                    )
                    }
                </>
            )}
        </>
    )
}

export default withRouter(Productos)
