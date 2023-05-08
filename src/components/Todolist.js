import React from "react"
function Todolist(props) {


 
  return (
    <>
    <div>
            <li>{props.text}</li>
            <button onClick={props.setItems}>Delete</button>


    </div>
    </> 
  )
}

export default Todolist