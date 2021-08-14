import React, { Component } from 'react';
import Header from '../../Component/Header/Header';
import LoadingLog from "../../Component/Loading/Loading"
import axios from 'axios';
import BeerCard from '../../Component/BeerCard/BeerCard'

import {Link} from 'react-router-dom';
import "./ListBeerPage.css"

export class ListeBeerPage extends Component {
    
    state={
        beers:null,
        search:"",
    }

    componentDidMount(){

        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response)=>{
                this.setState({beers:response.data})
            })
            .catch((error)=>console.log(`error`, error))


    }

    searchChange =(event)=>{
        this.setState({beers:null,search:event.target.value});
        
    }

    componentDidUpdate(){
         axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.search}`)
             .then((response)=>{
                 this.setState({beers:response.data})
             })
             .catch((error)=>console.log(`error`, error))
    }

    
    render() {
        if (this.state.beers===null){
            return (
                <div>
                    <Header/>
                    <LoadingLog/>
                </div>
            )
        }

        return (
            <div className="listPageWrapper">
                <Header/>
                <input placeholder="Search..." className="searchInput" name="searchInput" type="text" onChange={this.searchChange} value={this.state.search}></input>

                <ul className="listUL">
                    {this.state.beers.sort((a,b)=>{
                        if(a.name < b.name) { return -1; }
                        if(a.name > b.name) { return 1; }
                        return 0;
                    }).map((beer)=>{
                        return <Link className="listLinks" key={beer._id}to={"/beers/"+beer._id}>
                        <BeerCard beer={beer}/>
                        </Link>

                    })}

                </ul>
            </div>
        )
        
    }
}

export default ListeBeerPage

