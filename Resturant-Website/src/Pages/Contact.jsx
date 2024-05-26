import React from 'react'
import Layout from '../component/layout/Layout'

import "../Style/Contact.css"
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import CallEndIcon from '@mui/icons-material/CallEnd';

export default function Contact() {
  return (

    <Layout> 
      <div className="contact">
       
 
        

        <div className="detail">
        <h1> Contact Deatails</h1>

        
        <p> <CallEndIcon/>1800-00-0000</p>
        <p><MailIcon/>help@gamil.com</p>
        <p><PhoneIcon/>8651xxxxx</p>

        <p><WhatsAppIcon/>6799992222</p>
        
          
        </div>

      </div>
    </Layout>
   
  )
}

