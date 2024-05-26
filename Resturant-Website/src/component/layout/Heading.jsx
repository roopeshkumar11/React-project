import {Box, AppBar, Typography, Toolbar, IconButton ,Drawer, Divider} from '@mui/material'
import React, { useState } from 'react'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {Link, NavLink} from 'react-router-dom'
import "../../Style/Heading.css"
import MenuIcon from '@mui/icons-material/Menu';



function Heading() {

    const [mobileOpen,setmobile]=useState(false)
const handledrawer=()=>{
    setmobile(!mobileOpen)
}
    const drawer=(
        <Box onclick={handledrawer} sx={{textAlign:"center"}}>
           
       <Typography color={"goldenrod"} variant="h6" component="div" sx={{flexGrow:1,my:2}} >
                <FastfoodIcon/>My Resturant</Typography>
                <Divider/>

               
                    <ul className='mobile-navigation'>
                        <li ><NavLink activeClassName="active" to={"/"}> Home</NavLink></li>
                       
                        <li><NavLink to={"/about"}>About</NavLink></li>
                        <li><NavLink to={"/menu"}> Menu</NavLink></li>
                        <li><NavLink to={"/contact"}> Contact</NavLink></li>
                    </ul>
                </Box>
        
    )
  return (
    <>
    <Box className='logo'>
        <AppBar component={"nav"} sx={{bgcolor:"black"}}  >
            <Toolbar>
                <IconButton color='inherit' aria-label='open drawer' edge="start" sx={{mr:2,display:{sm:"none"},}} onClick={handledrawer}><MenuIcon/></IconButton>
            <Typography color={"goldenrod"} variant="h6" component="div" sx={{flexGrow:1}} className='my'>
                <FastfoodIcon/>My Resturant</Typography>

                <Box sx={{display:{xs:"none" ,sm:"block"}}}>
                    <ul className='navigation-menu'>
                        <li ><NavLink to={"/"} activeClassName="active"> Home</NavLink></li>
                        <li><NavLink to={"/menu"}> Menu</NavLink></li>
                        <li><NavLink to={"/about"}>About</NavLink></li>
                        <li><NavLink to={"/contact"}> Contact</NavLink></li>
                    </ul>
                </Box>
                </Toolbar>
        </AppBar>
        <Box component="nav">
            <Drawer variant="temporary" open={mobileOpen} onClose={handledrawer}
            sx={{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px"}} }>
                {drawer}
            </Drawer>
        </Box>
       
    </Box>
    </>
  )
}

export default Heading