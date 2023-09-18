import React, { Component } from "react";
import conversor from "./conversor.css";
 export default class conversor extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0,
        }

    }

    converter() {

        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;

        let url = `http://free.currencyconverterapi.com/api/v5/convert?q=${de_para}&compact=y`

        fetch(url)
        .then(res=>{
            return res.json()
        })
        .then(json=>{
            let cotacao = json[de_para].val;
            let moedaB_valor = (parseFloat (this.state.moedaA_valor) * cotacao).toFixed(2)
            this.setState({moedaB_valor})
        })
    }


    rendeR() {
        <div className="conversor">
            <h2>{this.props.moedaA}USD para {this.props.moedaB}</h2>
            <input type="text" onchange={(event)=>{this.setState({moedaA_valor:event.target.value})}}></input>
            <input type="button" value="converter" onClick={this.converter}></input>
            <h2>{this.state.moedaB_valor}</h2>

        </div>

    }
 }