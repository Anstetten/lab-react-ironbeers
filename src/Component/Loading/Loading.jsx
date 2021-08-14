import React from 'react'
import logo from "../../assets/homeLogo.png"; 
import './loading.css'

function Loading() {
    return (
        <div className='loadingWrapper'>
            <h4>Loading...</h4>
            <img src={logo} alt="loading-beer"></img>
        
        </div>
    )
}

export default Loading
