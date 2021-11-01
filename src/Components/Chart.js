import React, {Fragment, useState, useEffect} from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";
import axios from 'axios';
import Graph from './Graph'


const Chart = () => {

    const [todos, setTodos] = useState([]);
    const [etsy, setEtsy] = useState({});
    const [count, setCount] = useState(0);
    const [data, setData ] = useState([]);

    const [ebay, setEbay] = useState([]);
    const [clickedEbay , setClickedEbay ] = useState(false);

    

    const getTodos = async () => {
        try{
            const chartData = [];
            const response = await fetch( "http://ec2-18-117-39-212.us-east-2.compute.amazonaws.com:8000/", {
                method: "GET",
                headers : { 'Content-Type' : "application/json"}
            });
            const jsonData = await response.json();
            console.log(jsonData);
            setTodos(jsonData);
      
        } 
        catch(err){
            console.error(err.message);
        }
    };

    const getEtsy = async () => {
        try{
        const response = await fetch( "http://ec2-18-117-39-212.us-east-2.compute.amazonaws.com:8000/etsy");
        const jsonData = await response.json();
        console.log(jsonData);
        setEtsy(jsonData);
        } 
        catch(err){
            console.error(err.message);
        }
    };
    


    useEffect(
        () => {
            getTodos();
        }, []
    );

    const incrementCounter = (counting) => {
        return counting + 1;
    }

    const getEbayData = async () => {
        try{

<<<<<<< HEAD
            const response = await fetch( "http://ec2-18-117-39-212.us-east-2.compute.amazonaws.com:8000/ebay", {
                method: "GET",
                headers : { 'Content-Type' : "application/json"}
            });
=======
            const response = await fetch( "http://18.117.39.212:8000/ebay");
>>>>>>> f8fee46fb12fca11b6093161c5d1dc8939495825
            const jsonData = await response.json();
            console.log(jsonData);
            setEbay(jsonData);
            setClickedEbay(true);
         } 
        catch(err){
            setClickedEbay(false);
            console.error(err.message);
        }
    }

    const renderEbayData = () => {
        if(clickedEbay){ 
            return  (
             <div>
                <br />
                <button class = "btn btn-danger" onClick={() => setClickedEbay(false)} >Hide</button>
                <table class="table table-hover" style = {{color: "black"}}>
                    <thead>
                    <tr>
                    <th>Name</th>
                    <th>Retailer</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                {
                ebay.map((todo, i) => (

                    <tr style = {{textAlign: "center"}} key = {i} >
                    <td>{todo.name}</td>
                    <td>{todo.retailer}</td>
                    <td>{todo.price}</td>
                    <td style = {{textAlign: "center"}}><div style = {{height: "100px", width : "100px", textAlign: "center"}}><img style = {{height: "100px", width : "100px", textAlign: "center"}} src = {todo.image}></img></div></td>
                    <td><a href = {todo.url}>Click to view Item at {todo.retailer}</a></td>
                    </tr>
            ))}
             </tbody>
            </table>
            </div>
        )
        }
        else{
            return (
                <div></div>
            );
        }
    }



    let counter = -1;
    return (
        <div>

        <Graph data = { todos } />

           <AnimateGroup play>
 <table class="table table-hover" style = {{color: "black"}}>
    <thead>
        <tr>
        <th>Name</th>
        <th>Retailer</th>
        <th>Price</th>
        <th>Image</th>
        <th>Link</th>
        </tr>
    </thead>
    <tbody>


 {
        todos.map((todo, i) => (

                    <tr style = {{textAlign: "center"}} key = {i} >
                
                    <td>{todo.name}</td>
                    <td>{todo.retailer}</td>
                    <td>{todo.price}</td>
                    <td style = {{textAlign: "center"}}><div style = {{height: "100px", width : "100px", textAlign: "center"}}><img style = {{height: "100px", width : "100px", textAlign: "center"}} src = {todo.image}></img></div></td>
                    <td><a href = {todo.url}>Click to view Item at {todo.retailer}</a></td>
                    </tr>

            )
        )
    }
        </tbody>
    </table>
    </AnimateGroup>

    
    <button class = "btn btn-dark" onClick={getEbayData} >Scrape Ebay Sunchoke Data</button>
    {renderEbayData()}

</div> 
    );
}

export default Chart


