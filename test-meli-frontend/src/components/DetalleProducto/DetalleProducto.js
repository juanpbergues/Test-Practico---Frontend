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
                    console.log(resultado.data)
                    setProduct(resultado.data.item)
                    setLoading(false)
                } else {
                    console.log()
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
                                            <h2>{product.title}</h2>
                                            <div className='price'>
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
                            null
                        )
                    }
                </>
            )
            }
        </>
    )
}

export default DetalleProducto
