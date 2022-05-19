// pass props from parent (which is img url)
// inside this component you need to take props url and assign it to the url property of img tag 
// that img tag needs to be in a nice div with responsive screen size


import React from 'react'
import { FullPage, Slide } from 'react-full-page';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { Container, Box, Button } from '@mui/material';
import * as styles from '../css/casestudy.module.css'
import macbookpro from '../assets/images/banners/macbookpro.png'
const CaseStudy = (props) => {
  return (
    <Container maxWidth={false} className={styles.casestudyCont1}>
    <ScrollAnimation animateIn="animate__zoomIn"  delay={10}>
            <Box className={[styles.caseStudy1,styles.banner1, styles.csbgdiv1]} >
            <div className={styles.blockdiv1}>
                <div className={styles.cssblock1title1}>REDESIGNING WEBSITE</div>
                <div >
                    <span className={styles.cssblock2title1}>BLUE TRAIL</span>
                     <img src={macbookpro} style={{width: 600,left:988,top:100, position:'absolute'}}></img>
                     </div>
                <div className={styles.cssblock3title1}>We Provide Services in One Place</div>
                <Button variant="outlined" style={{marginTop:30,backgroundColor:'white'}}>View Case Study</Button>
            </div>
            </Box>
    </ScrollAnimation>
    </Container>
  );
};

export default CaseStudy