import React from 'react';

import './App.css';
import HomePage            from "./Pages/HomePage/HomePage";
import ListPage             from "./Pages/ListBeerPage/ListeBeerPage";
import NewBeerPage         from "./Pages/NewBeerPage/NewBeerPage";
import RandomBeerPage      from "./Pages/RandomBeerPage/RandomBeerPage";
import SingleBeerPage      from "./Pages/SingleBeerPage/SingleBeerPage";
import { Switch, Route}   from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/beers" component={ListPage}/>
        <Route exact path="/beers/:beerId" component={SingleBeerPage}/>
        <Route exact path="/random-beer" component={RandomBeerPage}/>
        <Route exact path="/new-beer" component={NewBeerPage}/>
      </Switch>
     
    </div>
  );
}

export default App;
