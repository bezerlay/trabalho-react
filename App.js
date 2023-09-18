import React, { Component } from "react";
//import logo from './logo.svg';
import conversor from './components/conversor.js';



class App extends component {
  render() {
    return (
      <div className="App">
        <h1>conversor de moedas</h1>
        <div className="linha">
        <conversor moedaA="USD" moedaB="BRL"></conversor>
        <conversor moedaA="BRL" moedaB="USD"></conversor>
        </div>
        <div className="linha">
        <conversor moedaA="CAD" moedaB="BRL"></conversor>
        <conversor moedaA="BRL" moedaB="CAD"></conversor>
        </div>
        <div className="linha">
        <conversor moedaA="EUR" moedaB="BRL"></conversor>
        <conversor moedaA="BRL" moedaB="EUR"></conversor>
        </div>
      </div>
      
      
    );
  }
}

export default App;
