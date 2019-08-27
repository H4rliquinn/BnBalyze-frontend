import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Header from "./components/header/Header.js";
import Home from "./components/home/Home.js";
import PropertyInfo from "./components/propertyInfo/PropertyInfo.js";

function App() {
  return (
    <div className="App"><Switch><Route path="/login"
        render={(props) => {
          return(<Header  {...props} loginLink="Register"/>)
        }}
        /> 
        <Route component={Header}/></Switch>
      
      <Route exact path="/" component={Home}/></div>
    
  );
}


export default App;
