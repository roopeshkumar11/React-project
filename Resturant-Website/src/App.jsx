

import './App.css'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Layout from './component/layout/Layout'
import Menu from './Pages/Menu'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import PageNotfound from './Pages/PageNotfound'

function App() {
 
  

  return (
    <>
 
 <BrowserRouter>
 <Routes>

  < Route path='/' element={<Home></Home>}/>
  <Route path='/about' element={<About/>} />
  <Route path='/menu' element={<Menu/>}/>
  <Route path='/contact' element={<Contact/>}/>

 

  <Route  path='*' element={<PageNotfound/>}/>
  </Routes></BrowserRouter>
      
      
    </>
  )
}

export default App
