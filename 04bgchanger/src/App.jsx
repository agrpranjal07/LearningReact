import { useState } from 'react'
import React from 'react'

function App() {
  const [color,setColor]= useState("olive")
  return (
    <>
    <div className="w-full h-screen" style={{backgroundColor: color}}>
    <h1 className='flex w-full font-bold justify-center font-sans  text-2xl text-amber-950'>
      Change Background
    </h1>
      <div className='w-full fixed flex flex-wrap justify-center bottom-12 index-x-0 px-2'>
      <div
      className='font-bold font-serif relative flex flex-wrap justify-center gap-3 shadow-lg bg-black opacity-45 px-2 py-3 rounded-3xl'>
      <button onClick={()=> setColor("red")}
      className='outline-none px-2 rounded-full'
      style={{backgroundColor:"red"}}>Red</button>
      <button  onClick={()=> setColor("blue")}
      className='outline-none px-2 rounded-full'
      style={{backgroundColor:"blue"}}>Blue</button>
      <button onClick={()=> setColor("green")}
      className='outline-none px-2 rounded-full'
      style={{backgroundColor:"green"}}>Green</button>
      <button onClick={()=> setColor("yellow")}
      className='outline-none px-2 rounded-full'
      style={{backgroundColor:"yellow"}}>Yellow</button>
      <button onClick={()=> setColor("white")}
      className='outline-none px-2 rounded-full'
      style={{backgroundColor:"white"}}>White</button>
      <button onClick={()=> setColor("orange")}
      className='outline-none px-2 rounded-full'
      style={{backgroundColor:"orange"}}>Orange</button>
      <button onClick={()=> setColor("pink")}
      className='outline-none px-2 rounded-full'
      style={{backgroundColor:"pink"}}>Pink</button>
        </div></div></div></>
    
  )
}

export default App
