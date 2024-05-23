
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './component/Header'
import Footer from './component/Footer'
import Siderbar from './component/Siderbar'
import Createpost from './component/Createpost'

import Postlist from './component/Postlist'
import { useState } from 'react'
import PostlistProvider from './store/Paot-list-store'
function App() {
 const [SelectedTab,setSelectedTab]= useState("Home")


  return (
   <PostlistProvider>
    <div className="app-container">
    <Siderbar SelectedTab={SelectedTab} setSelectedTab={setSelectedTab}/>
    <div className="contain">
    <Header/>
    {SelectedTab==="Home" ? (<Postlist/>):(<Createpost/>)}
  
    <Footer/></div></div>
    </PostlistProvider>
   
  )
}

export default App
