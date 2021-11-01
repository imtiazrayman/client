import React, {Fragment, useState, useEffect, Component} from 'react'
import CanvasJSReact from './canvasjs.react';
import Plot from 'react-plotly.js'
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;



const Graph = (props) => {

    const [names, setNames ] = useState(["Etsy", "InstaCart", "495expressfoods", "Russos"]);
    const [price, setPrice ] = useState([12,4,15,2])
    const [data, setData ] = useState([]);


    const getTodos = async () => {
        try{
            const nameData = [];
            const priceData = [];

            const response = await fetch( "http://localhost:8000/");
            const jsonData = await response.json();
            setData(jsonData);

            for(let i = 0; i < jsonData.length; i++) {
                nameData.push(jsonData[i].retailer)
                priceData.push(jsonData[i].price)
            }
            setNames(nameData);
            setPrice(priceData);
        } 
        catch(err){
            console.error(err.message);
        }
    };

    const calculate = () => {
        let lowest = data.price[0];
        let highest = data.price[0];
        let lowIndex = 0;
        let highIndex = 0;
        for(let i = 0; i < data.length; i++){
           
            if (data.price[i] < lowest) {
                lowest = data.price[i];
                lowIndex = i;
            }

            if (data.price[i] > highest) {
                lowest = data.price[i];
                highIndex = i;
            }
        }
        return (
            <div>
                <h6>Lowest Price : {lowest}</h6>
                <h6>Highest Price : {highest}</h6>
                <h6>Least Expensive Retailer : {names[lowIndex]}</h6>
                <h6>Most Expensive Retailer : {names[highIndex]}</h6>
            </div>
        )
    }



   /* const getData = async () => {
        try{
            const nameData = [];
            const priceData = [];
            for(let i = 0; i < props.data.length; i++) {
                nameData.push(props.data[i].retailer)
                priceData.push(props.data[i].price)
            }
            setNames(nameData);
            setPrice(priceData);
        } 
        catch(err){
            console.error(err.message);
        }
    };*/

     useEffect(
        () => {
            getTodos();
        }, []
    );



    return (
        <div style = {{textAlign : "inline-block"}}>
            <Plot 
            data = {[
                {
                    x : names,
                    y : price,
                    type : 'line'
                }
            ]}
            layout = { { width : 500, height : 500 , title : "Sunchoke Prices"} }
            />

            <Plot 
            data = {[
                {
                    x : names,
                    y : price,
                    type : 'bar'
                }
            ]}
            layout = { { width : 500, height : 500 , title : "Sunchoke Prices"} }
            />

        </div>
    )
}

export default Graph

