import React from 'react'

export default function Container({children}) {
  return (
    <div className="card" style={{width: "70%"}}>
   
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      {children}
    </div>
  </div>
  )
}
