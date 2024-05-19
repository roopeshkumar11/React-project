
import { useEffect, useState } from 'react'
import './App.css'
import Userdata from './component/Userdata'
import Context from './component/Context'

import Loader from './component/Loader'

const api="https://jsonplaceholder.typicode.com/users"


function App() {
const [users,setusers]=useState([])
const [load,setload]=useState(false)

  const fetchapi=async (url)=>{
    setload(true)
    try{
  const re=await  fetch(url)
  const data=await re.json()
  console.log(data)
  setusers(data)

  if(data.lenght===0){
   console.log("WS")
  }
    }

    catch(e){

      console.error(e)
    }
    setload(false)
  }
  useEffect(()=>{
  
    fetchapi(api)
    

    
  },[])

  return (


<>


<Context>

    <table>
      <thead>
        <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>add</th></tr>
      </thead>
      <tbody>
      {load && <Loader/>  }
        <Userdata  users={users}/> 
      </tbody>
    </table></Context>
 </>
  )
 
}

export default App
