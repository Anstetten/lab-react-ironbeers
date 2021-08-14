import React, { Component } from 'react'
import Header from '../../Component/Header/Header';
import LoadingLog from "../../Component/Loading/Loading"
import axios from 'axios';
import "../SingleBeerPage/SingleBeerPage.css"

export class RandomBeerPage extends Component {

    state=({beer:null})

    componentDidMount(){

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then((response)=>{
                this.setState({beer:response.data})
            })
            .catch((error)=>console.log(`error`, error))
    }


    render() {
        if (this.state.beer===null){
            return(
                <div>
                    <Header/>
                    <LoadingLog/>
                </div>
            )
        }
        return (
            <div>
                <Header/>
                <div className='singleBeerWrapper'>
                    <img src={this.state.beer.image_url} alt="beer-logo"></img>
                    <div className="singleBeerTitleDiv">
                        <span id="singleBeerTitle">{this.state.beer.name}</span>
                        <span  id="singleBeerAtt">{this.state.beer.attenuation_level}</span>
                    </div>
                    <div className="singleBeerMottoDiv">
                        <span id="singleBeerMotto">{this.state.beer.tagline}</span>
                        <span id="singleBeerDate">{this.state.beer.first_brewed}</span>
                    </div>
                    <p>{this.state.beer.description}</p>
                    <span id="singleBeerCreator">{this.state.beer.contributed_by}</span>

                </div>
            </div>
        )
    }
}

export default RandomBeerPage

