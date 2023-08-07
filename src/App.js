import React, { useState } from "react";
import {TiTickOutline} from "react-icons/ti"

function App() {
  const [newItem, setNewItem] = useState("")
  const [items, setItems] = useState([])

  function addItem () {
    if(!newItem){
      window.alert("Please Type Item Adding To List")
      return; 
    }

    const item = {
      id : Math.floor(Math.random() * 10000),
      value : newItem
    }

    setItems(oldItems => [...oldItems, item])
    setNewItem("");
  }


  function deleteItem (id){
    const newArray = items.filter(item => item.id !== id )
    setItems(newArray)
  }

  return (
    <div className="flex items-center justify-center flex-col h-[100vh] bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <h1 className="text-6xl p-4 border-b-4 border-white ">To Do App</h1>
      <div className="mt-20 flex items-center justify-between">
        <input className="w-[400px] focus:border-pink-500 text-pink-500 mr-10 py-4 px-6 rounded-xl placeholder:text-pink-500" type="text" name="" placeholder="Enter an item" id="" value={newItem} onChange={e => setNewItem(e.target.value)} />
        <button className="border-2 border-white py-4 px-6 rounded-xl hover:bg-white hover:text-pink-500" onClick={() => addItem()}>Add Item</button>
      </div>
      <ul className="mt-10">
        {items.map(item => {
          
          return (
            <li className="text-xl flex items-center capitalize" key={item.id}><TiTickOutline size={30}/> {item.value} <button className="ml-5" onClick={() => deleteItem(item.id)}>X</button></li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
