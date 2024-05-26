import { Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    
    <>
    <Box sx={{textAlign:"center" ,bgcolor:"#1A1A19" ,color:"white" ,p:3}}>

        <Box sx={{my:3, "& svg":{
            fontSize:"60px",
            cursor:"pointer",
            mr:2,
        }, " & svg:hover":{
            color:"goldenrod",
            transform:"translateX(5px)",
            transition:"all 400ms"

        }
         }}>
             <a href="https://github.com/roopeshkumar11"  style={{textDecoration:"none",color:"white"}}><GitHubIcon /></a> 
            <InstagramIcon />
           
            
            <TwitterIcon/>
        </Box>

        <Typography variant='h5 ' sx={{"@media (max-width:600px)":{fontSize:"1rem"}}}>

            All Right Reserved &copy : Made By Roopesh.choudhary.50
        </Typography>
    </Box>
    
    </>
  )
}

export default Footer