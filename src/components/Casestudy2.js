import React from 'react'
import {FullPage, Slide} from 'react-full-page';
import { AnimationOnScroll } from 'react-animation-on-scroll';
//import "animate.css/animate.mim.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { Container, Box, Button } from '@mui/material';
import * as styles from '../css/casestudy2.module.css';
import screenimages from '../assets/images/banners/screenimages.png'
const Casestudy2 =(props) =>{
    return(
    <Container maxWidth={false} className={styles.casestudy2Cont1}>
     <ScrollAnimation animateIn="animate__zoomIn"  delay={10}>
     
     <Box className={[styles.caseStudy2,styles.banner2, styles.csbgdiv2]}>
      <div className={styles.blockdiv2}>
        <div className={styles.cssblock2title1}>Know you’re making smart decisions for</div> 
          <div className={styles.cssblock2title2}>Four Your Future With</div>
          <div>
              <span className={styles.title2salliemae}>SALLIE MAE APP</span>
              <img src={screenimages} style={{width: 599.78,height: 600,float: "right",position: "absolute",marginLeft: 190,top: 0}}></img>
          </div>
             <div className={styles.cssblocktitle3}>Gather the facts you need to choose the right college. With our </div>
             <div className={styles.cssblocktitle3}>College Search, you can compare acceptance rates, financial aid </div>
             <div className={styles.cssblocktitle3}>packages, and the true cost of all your potential school</div>
          <Button variant="outlined" style={{marginTop:30, backgroundColor:"white",marginLeft:106}}>View Case Study</Button>
      </div> 
      </Box>
     </ScrollAnimation>
     </Container>
     );
};


export default Casestudy2