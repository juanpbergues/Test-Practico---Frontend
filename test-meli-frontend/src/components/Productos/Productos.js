import React, { useState, useEffect } from 'react'
import logo from 'assets/images/mercadolibreIcon.png'
import { useHistory } from "react-router-dom";
import Spinner from 'components/Utils/Spinner'

const Productos = () => {
    const history = useHistory();

    const handleRouteProductDetail = (id) => {
        history.push(`/items/${id}`);
    }

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [])

    const productos = [
        {
            id: 1,
            precio: '1000',
            descripcion: 'Aipad Touch Nuevo, 3GB',
            ubicacion: 'Cordoba'
        },
        {
            id: 2,
            precio: '1000',
            descripcion: 'Aipad Touch Nuevo, 3GB',
            ubicacion: 'Cordoba'
        },
        {
            id: 3,
            precio: '1000',
            descripcion: 'Aipad Touch Nuevo, 3GB',
            ubicacion: 'Cordoba'
        },
        {
            id: 4,
            precio: '1000',
            descripcion: 'Aipad Touch Nuevo, 3GB',
            ubicacion: 'Cordoba'
        }
    ]

    return (
        <>
            {loading ? (
                <div >
                    <Spinner />
                </div>
            ) : (
                <>
                    {
                        productos.map((producto) => (
                            <div
                                class="card"
                                onClick={() => handleRouteProductDetail(producto.id)}
                                key={producto.id}
                            >
                                <img src={logo} alt="Imagen" style={{ width: '25%' }} />
                                <div className="container">
                                    <div>
                                        <h3><b>$ {producto.precio}</b></h3>
                                        <p>{producto.descripcion}</p>
                                    </div>
                                    <div className='card-ubicacion'>
                                        <p className='text-marker'>{producto.ubicacion}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </>
            )}
        </>
    )
}

export default Productos
