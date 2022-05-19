import React from 'react'
import { FullPage, Slide } from 'react-full-page';
import { AnimationOnScroll } from 'react-animation-on-scroll';
//import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { Container, Box, Button } from '@mui/material';
import * as styles from '../css/casestudy4.module.css';
import MacbookPro1 from '../assets/images/banners/H&H/MacbookPro1.svg'
import Vector from '../assets/images/banners/Vector.png'

const Casestudy4 = (props) => {
  return (
    <Container maxWidth={false} className={styles.casestudyCont1}>
        <ScrollAnimation animateIn="animate__zoomIn"  delay={10}>
           <Box  className={[styles.caseStudy4,styles.banner1, styles.csbgdiv1]}>
               <div className={styles.block4div1}>
               <div className={styles.cssblock1}>
                    DEBT COLLECTION SYSTEM
                   
                   </div>
                   
                   
                   
               
               <div className={styles.cssblock2}>The simple, convenient two-stage debt recovery system </div>
               <div className={styles.cssblock3}>designed specifically for small- to mid-sized businesses</div>
               <Button variant="outlined" style={{marginTop:100,backgroundColor:'white', marginLeft:0}}>View Case Study</Button>
               </div>
            </Box>     
         
         
         </ScrollAnimation>
    </Container>
  )
}

export default Casestudy4