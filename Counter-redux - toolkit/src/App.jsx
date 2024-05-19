
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './component/Header'
import Displaycounter from './component/Displaycounter'
import Container from './component/Container'
import Controls from './component/Controls'
import { useSelector } from 'react-redux'
import Privacymess from './component/Privacymess'

function App() {

  const privacy=useSelector(store=>store.privacy)
 

  return (
  
    <div className="px-4 py-5 my-5 text-center">
   <Container>
   <Header/>
    <div className="col-lg-6 mx-auto">
   { privacy ? <Privacymess/>: <Displaycounter/>}
      <Controls/>
    </div></Container>
  </div>
  
  )
}

export default App
