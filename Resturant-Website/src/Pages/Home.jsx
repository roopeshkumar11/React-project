import React from 'react'
import Layout from '../component/layout/Layout'
import  {Link} from 'react-router-dom'

import Banner from "../Image/banner.jpeg"

import "../Style/Home.css"

export default function Home() {
  return (


    <Layout><div className='home' style={{backgroundImage:`url(${Banner})`}}>
      <div className="headercontainer">
        <h1>Anpurana Restaurant  </h1>
        <p>Best Food in India</p>
        <Link to="/menu">
        <button>ORDER NOW</button></Link>
      </div>
    </div></Layout>
    
  )
}
