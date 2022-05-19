import React, {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsappOutlined';
import {BsDribbble} from 'react-icons/Bs';
import "animate.css";

import Link from '../components/Link';
import Copyright from '../components/Copyright';
import Layout from '../components/Layout';
import Splash from '../components/Splash';
import ShellLogo from '../assets/images/141-1410342_shell-logo-royal-dutch-shell-00clients.png';
import ExxonLogo from '../assets/images/exxonmobil.svg';
import ChevronLogo from '../assets/images/chevron.svg';
import CapitalLogo from '../assets/images/capitalone.svg';
import BlueTrailLogo from '../assets/images/bluetrailsoftware.svg';
import SallieMaeLogo from '../assets/images/salliemae.svg';
import UsBankLogo from '../assets/images/usbank.svg';
import BankLogo from '../assets/images/bankofamerica.svg';
import HarisLogo from '../assets/images/harisharis.svg';
import LegionLogo from '../assets/images/legion.svg';

import './index.css';
import Banner from '../components/Banner';
import CaseStudy from '../components/CaseStudy';
import Casestudy2 from '../components/Casestudy2';
import Casestudy3 from '../components/Casestudy3';
import Casestudy4 from '../components/Casestudy4';
import Casestudy5 from '../components/Casestudy5';
import Casestudy6 from '../components/Casestudy6';
import Casestudy7 from '../components/Casestudy7';
import Casestudy8 from '../components/Casestudy8';

export default function Index(props) {
  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(true);
    }, 10000);
  });

  return (
    <div style={{backgroundColor:'black', width:'100vw', height:'100vh', background: 'linear-gradient(to bottom, #085578 0%, rgba(22, 111, 151, 0) 100%)'}}>
    {!showLoader ?  (
      <Splash />
    ) :  (
   <Layout>
      <Container maxWidth={false} style={{padding:0}} >
        <Box sx={{ my: 10 }} style={{maxWidth:'1200px', marginLeft:'auto', marginRight:'auto', marginBottom:300}}>
          <Typography variant="h4" component="h1"  style={{color:'white', fontWeight: '600', fontSize:'4.5em',
    fontStretch: "normal",fontStyle: "normal",lineHeight: 'normal',letterSpacing: 'normal',textAlign: 'left', 'lineHeight': '2.5em'}}>
            WE ARE CLOUD LOGICALLY
          </Typography>
          <Typography variant="h6" component="h6" gutterBottom style={{fontSize:'1.8rem', color:'whitesmoke'}}>
          CLOUD LOGICALLY is your logical partner for all your web, mobile and custom app development needs. Team up with the best collaboration with the right people.
          </Typography>
          <Box sx={{ my: 5 }} style={{color:'whitesmoke', float: 'left',marginBottom:100}} >
          <FacebookIcon fontSize='large' style={{marginRight: '8px'}}/>
          <LinkedInIcon fontSize='large' style={{marginRight: '8px'}}/>
          <InstagramIcon fontSize='large' style={{marginRight: '8px'}}/>
          <BsDribbble size={32} style={{marginRight: '8px'}}/>
        </Box>
        </Box>
        <Box sx={{ my: 5}} style={{backgroundColor:'black', padding:'50px'}}>
        <Typography variant="h4" component="h1"  style={{color:'white', fontWeight: '500', fontSize:'4em',
    fontStretch: "normal",fontStyle: "normal",lineHeight: 'normal',letterSpacing: 'normal',textAlign: 'center', 'lineHeight': '2.5em'}}>
           CLIENTS
          </Typography>
          <Box sx={{my: 3}} style={{'flexGrow': 0,margin: 'auto', backgroundColor: '#000', maxWidth: 1000, textAlign:'center'}}>
            <img src={ShellLogo} style={{'flexGrow': 0,padding: '14px 30px 50px 28px', width: 200}}/>
            <img src={SallieMaeLogo} style={{'flexGrow': 0,padding: '14px 30px 50px 28px', width: 200}}/>
            <img src={LegionLogo} style={{'flexGrow': 0,padding: '14px 30px 50px 28px', width: 200}}/>
            <img src={BlueTrailLogo} style={{'flexGrow': 0,padding: '14px 30px 50px 28px', width: 200}}/>
            <img src={HarisLogo} style={{'flexGrow': 0,padding: '14px 30px 50px 28px', width: 200}}/>
          </Box>
          <Box sx={{my: 0}} style={{'flexGrow': 0, margin: 'auto', backgroundColor: '#000', maxWidth: 1000, textAlign:'center'}}>
            <img src={BankLogo} style={{'flexGrow': 0,padding: '14px 30px 50px 28px', width: 200}}/>
            <img src={CapitalLogo} style={{'flexGrow': 0,padding: '14px 30px 50px 28px', width: 200}}/>
            <img src={UsBankLogo} style={{'flexGrow': 0,padding: '14px 30px 50px 28px', width: 200}}/>
            <img src={ExxonLogo} style={{'flexGrow': 0,padding: '14px 30px 50px 28px', width: 200}}/>
            <img src={ChevronLogo} style={{'flexGrow': 0,padding: '14px 30px 50px 28px', width: 200}}/>
          </Box>
        </Box>
        <CaseStudy/>
        <Casestudy2/>
        <Casestudy3/>
        <Casestudy4/>
        <Casestudy5/>
        <Casestudy6/>
        <Casestudy7/>
        <Casestudy8/>
      </Container>
    </Layout>
  )}</div>);
}
