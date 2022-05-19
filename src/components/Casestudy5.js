
import React from 'react'
import { FullPage, Slide } from 'react-full-page';
import { AnimationOnScroll } from 'react-animation-on-scroll';
//import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { Container, Box, Button } from '@mui/material';
import * as styles from '../css/casestudy5.module.css';
const Casestudy5 = () => {
  return (
    <Container maxWidth={false} className={styles.casestudyCont1}>
        <ScrollAnimation animateIn="animate__zoomIn"  delay={10}>
           <Box className={[styles.caseStudy5,styles.banner1, styles.csbgdiv1]}>
           <div className={styles.block5div1}>
           <div className={styles.cssblocktitle2}> Centralize communication and</div>
           <div>
            <span className={styles.cssblocktitle1}>empower employees</span>
            </div>
          <div className={styles.cssblocktitle3}>Build harmony between business and employee </div>
          <div className={styles.cssblocktitle4}>needs</div>
          <Button variant="outlined" style={{marginTop:50,backgroundColor:'white'}}>View Case Study</Button>
           </div>
           </Box>

         </ScrollAnimation>

    </Container>
  )
}

export default Casestudy5