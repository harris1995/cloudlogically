import React from 'react'
import { FullPage, Slide } from 'react-full-page';
import { AnimationOnScroll } from 'react-animation-on-scroll';
//import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { Container, Box, Button } from '@mui/material';
import * as styles from '../css/casestudy6.module.css';
const Casestudy6 = () => {
  return (
    <Container maxWidth={false} className={styles.casestudyCont1}>
        <ScrollAnimation animateIn="animate__zoomIn"  delay={10}>
       <Box className={[styles.caseStudy6,styles.banner1, styles.csbgdiv1]}>
        <div className={styles.block6div1}>
        <div className={styles.cssblocktitle1}>Zelle a fast,safe</div>
        <div className={styles.cssblocktitle2}>and easy way to send and receive money </div>
        
        </div>
        
        <div className={styles.cssblocktitle3}>Introducing new insights and widget  in Zelle</div>
        <Button variant="outlined" style={{marginTop:60,backgroundColor:'white'}}>View Case Study</Button>
       </Box>
         </ScrollAnimation>

    </Container>
  )
}

export default Casestudy6