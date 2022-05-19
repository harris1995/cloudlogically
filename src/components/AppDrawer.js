import React, {useState} from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import * as styles from "../css/appdrawer.css"

import {makeStyles, styled} from "@mui/styles"
import * as linkStyles from '../css/link.module.css'
import Link from '../components/Link';

const useStyles = makeStyles(()=>({
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  width: '100%',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const AppDrawer = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
     <><Drawer
      open={openDrawer}
      anchor='top'
      onClose={() => setOpenDrawer(false)}
    >
      <DrawerHeader>
      <IconButton onClick={() => setOpenDrawer(false)}>
            <CloseIcon style={{backgroundColor:'black', color:'white', fontSize:'42px', float:'left'}}/> 
      </IconButton>
      </DrawerHeader>
      <List>
        <ListItem onClick={() => setOpenDrawer(false)}>
          <ListItemText>
            <Link to="/" className={linkStyles.menulink}>Home</Link>
          </ListItemText>
        </ListItem>
        <ListItem onClick={() => setOpenDrawer(false)}>
          <ListItemText>
            <Link to="/about" className={linkStyles.menulink}>About</Link>
          </ListItemText>
        </ListItem>
        <ListItem onClick={() => setOpenDrawer(false)}>
          <ListItemText>
            <Link to="/contact" className={linkStyles.menulink}>Contact</Link>
          </ListItemText>
        </ListItem>
        <ListItem onClick={() => setOpenDrawer(false)}>
          <ListItemText>
            <Link to="/about" className={linkStyles.menulink}>Faq</Link>
          </ListItemText>
        </ListItem>
      </List>
    </Drawer>
    <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
    <MenuIcon style={{color:'white'}} />
    </IconButton>
   </>
  )
}
export default AppDrawer
