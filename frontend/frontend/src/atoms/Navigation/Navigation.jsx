import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Heading from '../Heading/Heading';
import SmallHead from '../SmallHead/SmallHead';
import Button from '../button/Button';
import "./Navigation.css"

const Navigation = (Navigationbar) => {
    return (
      <div >Navigation</div>
    )
  }

export default function Navigationbar(){
    return(
        <Box >
            <AppBar position="static" >
                <Toolbar sx={{flexGrow:1, backgroundColor: "#2A4704"}}>
                    
                    <div className='navbar-style'>
                    <Typography variant="h6" component="div" style={{lineHeight:"50px"}}>                     
                            <Heading className="small-heading"/>
                            <SmallHead className="s-heading"/>
                    </Typography>
                    
                    <div className='home-contact'> 
                         <Button className='home-button' text="HOME"></Button> 
                         <Button className='home-button' text="CONTACT"></Button>
                    </div>
                    </div>         
                </Toolbar>
            </AppBar>
        </Box>
    );
}