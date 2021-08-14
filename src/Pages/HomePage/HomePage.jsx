import React from 'react'
import './HomePage.css'
import {Link}    from "react-router-dom";
import NewBeerPage              from "../NewBeerPage/NewBeerPage";
import RandomBeerPage           from "../RandomBeerPage/RandomBeerPage";
import ListPage                 from "../ListBeerPage/ListeBeerPage";
import beers                    from '../../assets/beers.png'
import newBeer                    from '../../assets/new-beer.png'
import randomBeer                    from '../../assets/random-beer.png'


function HomePage() {
    return (
        <div className='homeWrapper'>
            <Link className="homeLink" to='/beers'>
                <img src={beers} alt="background-beers"></img>
                <h2>All Beer</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quidem vel quia ipsam tempora beatae veritatis commodi, expedita officia dolorem </p>

            </Link>
            <Link className="homeLink" to='/random-beer'>
                <img src={randomBeer} alt="background-random"></img>
                <h2>Random Beer</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quidem vel quia ipsam tempora beatae veritatis commodi, expedita officia dolorem </p>
            </Link>
            <Link className="homeLink" to='/new-beer'>
                <img src={newBeer} alt="background-new"></img>
                <h2>New Beer</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quidem vel quia ipsam tempora beatae veritatis commodi, expedita officia dolorem.</p>

            </Link>
        </div>
    )
}

export default HomePage
