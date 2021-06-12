import React, { useState } from 'react'
import Logo from 'assets/images/mercadolibreIcon.png'
import { useHistory } from "react-router-dom";

const CajaBusqueda = () => {
    const history = useHistory();

    const [valueSearch, setValueSearch] = useState('')

    const handleSearchChange = (e) => {
        setValueSearch(e.target.value);
    }

    const handleSearch = () => {
        history.push(`/items?search=${valueSearch}`);
    }

    return (
        <div className="topbar">
            <form
            >
                <div className='topbar_med'>
                    <img src={Logo} alt="Icono" className='logo' />
                    <input className='input' type="text" id="search" name="search" placeholder="Nunca dejes de buscar" onChange={handleSearchChange} />
                    <button disabled={valueSearch === '' ? true : false} className='search-btn' type="submit" onClick={() => handleSearch()}>
                        Buscar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CajaBusqueda
