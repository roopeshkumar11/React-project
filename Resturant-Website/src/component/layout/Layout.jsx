
import React from 'react'
import Heading from './Heading'
import Footer from './Footer'

function Layout({children}) {
  return (
    
    <>
     <Heading/>
    
    <div>{children}</div>
    <Footer/>
    </>
  )
}

export default Layout
