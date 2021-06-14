import React, { useState, useEffect, Fragment } from 'react'
import Spinner from 'components/Utils/Spinner'
import { getProductDetail } from 'api/items'
import { useParams } from "react-router";

const DetalleProducto = () => {

    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        async function getProductDetailApi(id) {
            try {
                const resultado = await getProductDetail(id)
                console.log(resultado)
                if (resultado.status === "OK") {
                    setProduct(resultado.data.item)
                    setLoading(false)
                }
                else if (resultado.status === 'UNAUTHORIZED') {
                    alert(resultado.message);
                    setLoading(false)
                }
                else {
                    alert(resultado.message);
                    setLoading(false)
                }
            } catch (err) {
                alert("Se produjo un error");
            }
        }
        getProductDetailApi(id)
    }, [id])

    return (
        <>
            {loading ? (
                <div >
                    <Spinner />
                </div>
            ) : (
                <>
                    {
                        product ? (
                            <>
                                <div className='breadcrumbs'>
                                    {
                                        product.categories.map((category, index) => (
                                            <Fragment key={category.id}>
                                                <p className='breadcrumb-item' >{index === 0 ? '' : '>'}</p>
                                                <p className='breadcrumb-item' >{category.name} </p>
                                            </Fragment>
                                        ))
                                    }
                                </div>
                                < div className="product-container" >
                                    <div className="product">
                                        <img src={product.picture} alt="Avatar" style={{ width: '75%' }} />
                                        <div className="product-data">
                                            <div className='extra-data'>
                                                <p>{product.condition === "new" ? 'Nuevo' : (product.condition === "used" ? 'Usado' : 'No Especificado')}</p>
                                                <p> - </p>
                                                <p>{product.sold_quantity} vendidos</p>
                                            </div>
                                            <h2>{product.title}</h2>
                                            <div className='price price-detail'>
                                                <h1>$ {product.price.amount}</h1>
                                                <h4 className='price-decimals'>{product.price.decimals ? product.price.decimals : '00'}</h4>
                                            </div>
                                            <button className='btn btn-success'>
                                                Comprar
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <h2>Descripción del Producto</h2>
                                        <p>{product.description}</p>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div>
                                El detalle del producto no se encuentra disponible
                            </div>
                        )
                    }
                </>
            )
            }
        </>
    )
}

export default DetalleProducto
