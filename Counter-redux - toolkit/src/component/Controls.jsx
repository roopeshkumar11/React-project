import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { counteraction } from '../store/Counter';
import { privacyaction } from '../store/privacy';

export default function Controls() {

  const inputelement=useRef();

 const dispatch= useDispatch()

 const handleinc=()=>{
 dispatch(counteraction.increment())


 }

 const handledec=()=>{
  dispatch(counteraction .decerement())

}

const handleadd=()=>{
 
  
  dispatch(counteraction.add({num: inputelement.current.value}))
  inputelement.current.value=""

}
const handlesubstract=()=>{
 
  dispatch(counteraction.sub({num: inputelement.current.value}))
  inputelement.current.value=""
  
}


const handlepriavcy=()=>{
  dispatch(privacyaction.toggle())
}
  return (

    <>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center ">
    <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={handleinc}>+1</button>
    <button type="button" className="btn btn-success btn-lg px-4" onClick={handledec}>-1</button>
    <button type="button" className="btn btn-warning btn-lg px-4" onClick={handlepriavcy}>Privacy Toggle</button>
  </div>

  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
    <input type="text" placeholder='Enter number'  className='number-input' ref={inputelement} />
    <button type="button" className="btn btn-info btn-lg px-4" onClick={handleadd}>Add</button> 
    <button type="button" className="btn btn-danger btn-lg px-4" onClick={handlesubstract}>Substract</button> 
  </div>

  </>
  )
}
