import React, { useState, useEffect } from 'react'
import logo from 'assets/images/mercadolibreIcon.png'
import Spinner from 'components/Utils/Spinner'

const DetalleProducto = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [])

    return (
        <>
            {loading ? (
                <div >
                    <Spinner />
                </div>
            ) : (
                <div className="product-container">
                    <div className="product">
                        <img src={logo} alt="Avatar" style={{ width: '75%' }} />
                        <div className="product-data">
                            <h2>Deco Reverse Sombrero Oxford</h2>
                            <h1>$ 1000</h1>
                            <button className='btn btn-success'>
                                Comprar
                            </button>
                        </div>
                    </div>
                    <div>
                        <h2>Descripción del Producto</h2>
                        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default DetalleProducto
