import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import { AnimationOnScroll } from 'react-animation-on-scroll';
//import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { Container, Box, Button } from '@mui/material';
import * as styles from  '../css/casestudy3.module.css';
import usbank1 from '../assets/images/banners/usbank1.png'
import usbank2 from '../assets/images/banners/usbank2.png'

const Casestudy3 =(props) =>{
    return(
       <Container maxWidth={false} className={styles.casestudyCont1}>
           <ScrollAnimation animateIn="animate__zoomIn"  delay={10}>
             <Box className={[styles.caseStudy3, styles.banner1, styles.csbigdiv1]}>
                 <div className={styles.block3div1}>
                     <div className={styles.cssblocktitle}>We offer support for our </div>
                     <div>
                         <span className={styles.cssblocktitle1}>military and</span>
                         <div>
                         <span className={styles.cssblocktitle2}>veteran communities</span>
                        
                         
                         
                         
                         </div>
                         <div ><p className={styles.cssblocktitle3}>You can rely on us to help make your permanent change of station as stress - free as possible</p></div>
                     <Button variant="outlined" style={{marginTop:60,backgroundColor:"white", marginLeft:8}}>View Case Study</Button>

                         

                         
                         
                     </div>
                     
                     
                 </div>

             </Box>

           </ScrollAnimation>

       </Container>
    );
};
export default Casestudy3