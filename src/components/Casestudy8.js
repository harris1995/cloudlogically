import React from 'react'
import { FullPage, Slide } from 'react-full-page';
import { AnimationOnScroll } from 'react-animation-on-scroll';
//import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { Container, Box, Button } from '@mui/material';
import * as styles from '../css/casestudy8.module.css'
const Casestudy8 = () => {
  return (
    <Container maxWidth={false} className={styles.casestudyCont}>
    <ScrollAnimation animateIn="animate__zoomIn"  delay={10}>
            <Box className={[styles.caseStudy8,styles.banner1, styles.csbgdiv1]} >
            <div className={styles.block8div1}>
                <div className={styles.cssblocktitle2}>ILLUSTRATIONS</div>
                <div >
                    <span className={styles.cssblocktitle1}>US BANK</span>
                     
                     </div>
                
                <Button variant="outlined" style={{marginTop:150,backgroundColor:'white',marginLeft:53}}>View Case Study</Button>
            </div>
            </Box>
    </ScrollAnimation>
    </Container>
  )
}

export default Casestudy8