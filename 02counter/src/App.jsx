import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let[counter, setCounter]= useState(15)

  //let counter=5;

  const addValue = () => {
    if(counter<20){
    setCounter(++counter);}
  }
  const remValue = () =>{
    if (counter >0){
    setCounter(--counter);}
  }
  return (
    <>
     <h1>Pranjal aur react</h1>
     <h2>Counter value: {counter}</h2>

     <button
     onClick={addValue}>Add value</button>
     <br />
     <button onClick={remValue}>remove value</button>
    </>
  )
}

export default App
