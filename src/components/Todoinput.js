import React, { useState } from 'react'

function Todoinput(props) {
    const [inputtext,setInputtext]=useState("")
  return (
    <div>
      <input type='text' placeholder='Enter your todo'
       value={inputtext} onChange={(e)=>setInputtext(e.target.value)}/>
      <button className='btns' onClick={()=>{props.addtodo(inputtext)
    setInputtext("")}}>Add</button>
    </div>
  )
}