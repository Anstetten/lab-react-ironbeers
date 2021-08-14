import React from 'react'
import { Link}    from "react-router-dom";
import "./Header.css"
import homeLogo from '../../assets/homeLogo.png'

function Header() {
    return (
        <div className="headerWrapper">
            <Link to='/'>
                <img src={homeLogo} alt="home-logo"></img>
            </Link>
        </div>
    )
}

export default Header
