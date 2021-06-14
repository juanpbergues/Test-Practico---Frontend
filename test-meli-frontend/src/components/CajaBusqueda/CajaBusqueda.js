import React, { useState } from 'react'
import Logo from 'assets/images/mercadolibreIcon.png'
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const CajaBusqueda = () => {
    const history = useHistory();

    const [valueSearch, setValueSearch] = useState('')

    const handleSearchChange = (e) => {
        setValueSearch(e.target.value);
    }

    const handleSearch = () => {
        history.push({
            pathname: '/items',
            search: `?search=${valueSearch}`,
            state: { query: valueSearch }
        });
    }

    return (
        <div className="topbar">
            {/* <form
            > */}
            <div className='topbar_med'>
                <img src={Logo} alt="Icono" className='logo' />
                <input className='input' type="text" id="search" name="search" placeholder="Nunca dejes de buscar" onChange={handleSearchChange} />
                <button disabled={valueSearch === '' ? true : false} className='search-btn' type="submit" value={valueSearch} onClick={() => handleSearch()}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            {/* </form> */}
        </div>
    )
}

export default CajaBusqueda
