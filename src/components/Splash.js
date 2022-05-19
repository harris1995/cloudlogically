import React from 'react';
import {useLottie} from 'lottie-react';
import animationData from '../assets/lotties/lineloading.json';
import logo from '../assets/images/logo.png'
import {
    CssBaseline,
    Typography,
    useTheme,
    useMediaQuery
  } from "@mui/material";

export default function Splash() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

      const styles = {
          width:400,
          height:400,
          margin:'auto',
          position:'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
      }

      const {View} = useLottie(defaultOptions, {width:'100%', height:'50px'})
      return (
         <div style={styles}>

          <img src={logo} alt="Cloud Logically" style={{justifyContent:'center', margin:'auto', display:'flex'}}  />
          <Typography variant="h4" style={{color:'white', justifyContent:'center', display:'flex'}} >
           CLOUD LOGICALLY
          </Typography>
                {View}
            </div>
      )
}