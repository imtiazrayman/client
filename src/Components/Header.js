import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";

const Header = () => {
    return (

 <div>
      <nav class="navbar navbar-dark" style = {{backgroundColor: "black"}}>
      <div class="container-fluid">
    <a class="navbar-brand center center-block" href="#"><h2>Sunchoke Price Analyzer</h2></a>
  </div>
     </nav>

     <nav class="navbar navbar-dark" style = {{backgroundColor: "black"}}>
      <div class="container-fluid">
      <AnimateGroup play>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>
      <h5 style = {{color : "white"}}>www.InstaCart.com</h5>
      </Animate>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={1}>
      <h5 style = {{color : "white"}}>www.Russos.com</h5>
      </Animate>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={2}>
      <h5 style = {{color : "white"}}>www.Etsy.com</h5>
      </Animate>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={3}>
      <h5 style = {{color : "white"}}>www.495expressfoods.com</h5>
      </Animate>

    </AnimateGroup>
  </div>
     </nav>

     <div class="navbar navbar-dark" style = {{color : 'white' , backgroundColor : 'black'}}>
    
    <div class="container-fluid" style = {{color : 'white' , backgroundColor : 'black'}}>
    <marquee style = {{color : 'white' , backgroundColor : 'black'}}>Comparing the best Sunchoke (Jerusalem Artichoke) prices online.&nbsp;&nbsp;Analyze prices from sites such as : &nbsp;&nbsp; www.InstaCart.com &nbsp;|&nbsp; www.Russos.com &nbsp;|&nbsp; www.Etsy.com &nbsp;|&nbsp; www.495expressfoods.com
    </marquee>
  </div>

     </div>
     <br />
     <br />
     <AnimationOnScroll animateIn="animate__fadeInLeftBig" >
            <h1>Sunchoke Price Analyzer</h1>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInLeftBig" >
            <h1>Current Prices of Sunchoke:</h1>
            </AnimationOnScroll>
           <br />
           <br />
        </div>
    )
}

export default Header
