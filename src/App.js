import React, { useState } from "react";
import Todolist from "./components/Todolist";
const App = ()=>{
  const [inputtext,setInputtext]=useState("");
  const [items,setItems]=useState([]);
  const itemEvent =(event)=>{
    setInputtext(event.target.value)
  }
  const listOfItems =()=>{
    setItems((oldItems)=>{
      return[...oldItems,inputtext];
    })
    setInputtext("");
  }

  const deleteItems=(id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrayEle,index)=>{
        return index!==id;
      })
    })
      }

  return(
<div className="main_div">

<div className="center_div">
<br />
<h1> ToDo List</h1>
<br />
<input type="text" placeholder="Add a Items" onChange={itemEvent} />
<button onClick={listOfItems}> + </button>
<ul>
  {/* <li>{inputtext}</li> */}
  {items.map((itemsvalue,index)=>{
    return(
    <Todolist 
    key={index} 
    id={index} 
    text={itemsvalue}
    onSelect={deleteItems}

    />
    )})
  }
</ul>
</div>
</div>
)
}
export default App;