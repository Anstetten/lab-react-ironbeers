import React, { Component } from 'react'
import "./NewBeerPage.css";
import Header from '../../Component/Header/Header';
import axios from "axios";

export class NewBeerPage extends Component {

    state={
        name: "",
        tagline:'',
        description:'...',
        first_brewed :"mm/yyyy",
        brewers_tips :"",
        attenuation_level :0,
        contributed_by :"",
    }


    submitBeer =(event)=>{

        event.preventDefault();
        
        // let beer ={
        //     name:this.state.name,
        //     tagline:this.state.tagline,
        //     description:this.state.description,
        //     first_brewed:this.state.first_brewed,
        //     brewers_tips:this.state.brewers_tips,
        //     attenuation_level:this.state.attenuation_level,
        //     contributed_by:this.state.contributed_by,
        // }

        axios.post("https://ih-beers-api2.herokuapp.com/beers/new",{
            name:this.state.name,
            tagline:this.state.tagline,
            description:this.state.description,
            first_brewed:this.state.first_brewed,
            brewers_tips:this.state.brewers_tips,
            attenuation_level:this.state.attenuation_level,
            contributed_by:this.state.contributed_by,
        })
            .then((response)=>{
                this.props.history.push('/beers');
            })
            .catch((error)=>{console.log(`error`, error)})

    }

    handleChange =(event)=>{
        this.setState({
            [event.target.name]:event.target.value,
        })
    }

    render() {
        return (
            <div className="newBeerWrapper">
                <Header/>
                <form onSubmit={this.submitBeer}>
                <label>Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                
                <label>Tagline</label>
                <input type="text" name="tagline" value={this.state.tagline} onChange={this.handleChange}/>
                
                <label>Description</label>
                <textarea name="description" value={this.state.description} onChange={this.handleChange}>...</textarea>
                

                <label>First Brewed</label>
                <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={this.handleChange}/>
                
                <label>Brewers Tips</label>
                <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={this.handleChange}/>
                
                <label>Attenuation LEvel</label>
                <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleChange}/>
                
                <label>Contributed By</label>
                <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={this.handleChange}/>

                <button>ADD NEW</button>

                

            </form>
            </div>
            
        )
    }
}

export default NewBeerPage
