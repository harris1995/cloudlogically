// pass props from parent (which is img url)
// inside this component you need to take props url and assign it to the url property of img tag 
// that img tag needs to be in a nice div with responsive screen size


import React from 'react'
import { FullPage, Slide } from 'react-full-page';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import logo from "../assets/images/logo.png"
import ScrollAnimation from 'react-animate-on-scroll';
import BlueTrailCaseStudy from '../assets/images/BlueTrailCaseStudy.png'
const Banner = (props) => {
   // const url = URL('C:\Users\dell\portfolioapp\src\assets\images\logo.png')
  return (
    <>
    <img src={props.url}/>
    <div>
    <ScrollAnimation animateIn="fadeIn">
      <img src={BlueTrailCaseStudy} alt='logo'/>
    </ScrollAnimation>
  </div>
  </>
  );
};

export default Banner