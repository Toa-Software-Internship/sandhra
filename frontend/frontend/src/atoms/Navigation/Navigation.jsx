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
                <Toolbar sx={{backgroundColor: "#2A4704"}}>
                    
                    <div className='navbar-style'>
                        <div className='navbar-heading'>
                                <Heading className="small-heading"/>
                                <SmallHead className="s-heading"/>
                        </div>
                        
                        <div className='navbar-buttons'> 
                            <Button className='home-button' text="HOME"></Button> 
                            <Button className='home-button' text="CONTACT"></Button>
                        </div>
                    </div>         
                </Toolbar>
            </AppBar>
        </Box>
    );
}