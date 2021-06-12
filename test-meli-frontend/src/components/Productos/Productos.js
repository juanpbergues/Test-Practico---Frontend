import React from 'react'
import logo from 'assets/images/mercadolibreIcon.png'

const Productos = () => {
    const handleRouteProductDetail = () => {
        console.log('hola')
    }

    return (
        <div 
        class="card"
        onClick={handleRouteProductDetail}
        >
            <img src={logo} alt="Avatar" style={{ width: '25%' }} />
            <div class="container">
                <div>
                    <h3><b>$ 1000</b></h3>
                    <p>Aipad Touch Nuevo, 3GB</p>
                </div>
                <div className='card-ubicacion'>
                    <p className='text-marker'>Cordoba</p>
                </div>
            </div>
        </div>
    )
}

export default Productos
