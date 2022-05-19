import React from 'react'
import { FullPage, Slide } from 'react-full-page';
import { AnimationOnScroll } from 'react-animation-on-scroll';
//import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { Container, Box, Button } from '@mui/material';
import * as styles from '../css/casestudy7.module.css'
const Casestudy7 = () => {
  return (
    <Container maxWidth={false} className={styles.casestudyCont1}>
  <ScrollAnimation animateIn="animate__zoomIn"  delay={10}>
            <Box className={[styles.caseStudy7,styles.banner1, styles.csbgdiv1]} >
            <div className={styles.block7div1}>
                <div className={styles.cssblocktitle2}>Designing a</div>
                <div >
                    <span className={styles.cssblocktitle1}>design System</span>
                     
                     </div>
                <div className={styles.cssblocktitle3}>Our design system helps us work together to build </div>
                <div className={styles.cssblocktitle4}>a great experience</div>
                <Button variant="outlined" style={{marginTop:30,backgroundColor:'white'}}>View Case Study</Button>
            </div>
            </Box>
    </ScrollAnimation>
    </Container>
  )
}

export default Casestudy7