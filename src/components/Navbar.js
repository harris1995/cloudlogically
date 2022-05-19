
import React, { useState } from "react"
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    useTheme,
    useMediaQuery,
    Container
  } from "@mui/material";

  import {makeStyles} from "@mui/styles"

import Link from '../components/Link';
import AppDrawer from "./AppDrawer";

import logo from '../assets/images/logo.png'

  const useStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: theme.spacing(10),
      display: "flex",
      fontFamily:'"Roboto","Helvetica","Arial",sans-serif'
    },
   logoTile: {
      flexGrow: "1",
      cursor: "pointer",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "16px",
      marginLeft: theme.spacing(20),
      "&:hover": {
        color: "gray",
      },
    },
    logo: {
      maxWidth: 40,
      marginRight: '10px'
    }
  }));

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
      <AppBar position="static" style={{ background: '#181818'}}>
        <Toolbar style={{ background: '#181818', marginLeft:'auto', marginRight:'auto' }} disableGutters>
        <img src={logo} alt="Cloud Logically" className={classes.logo} />
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Cloud Logically
          </Typography>
          {isMobile ? (
         <AppDrawer />
          ) : (
            <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
            <Link to="/faq" className={classes.link}>
              FAQ
            </Link>
          </div>
            )}
        </Toolbar>
       
      </AppBar>
    )
}
export default Navbar
