import React from 'react'
import './BeerCard.css';

function BeerCard(props) {

    return (
        <div className='beerCardWrapper'>
            <div className="beerCardImgWrapper">
            <img src={props.beer.image_url} alt="beer-logo"/>
            </div>
            <div className="beerCardInfo">
                <span className="beerCardTitle">{props.beer.name}</span>
                <span className="beerCardMotto">{props.beer.tagline}</span>
                <span className="beerCardCreator"><strong>Created by: </strong>{props.beer.contributed_by}</span>
            </div>
        </div>
    )
}

export default BeerCard
