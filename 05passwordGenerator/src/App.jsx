import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length,setlength] = useState(8);
  const [numAllowed,setNum] =useState(false);
  const [charAllowed,setChar] =useState(false);
  const [password, setPassword]=useState("");

  //useRef hook
  const passwordRef= useRef(null);

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmonpqrstuvwxyz"
    if(numAllowed){
     str =str + "1234567890";
    }
    if(charAllowed){
      str=str + "!@#$%^&*";
    }
    for (let i = 0; i < length; i++) {
      let char= Math.floor(Math.random()*str.length +1)
      pass += str.charAt(char)
    }
    setPassword(pass)
    
  },[length,numAllowed,charAllowed,setPassword])

  const copyPasswordtoClipboard= useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  },[password,])
  useEffect(()=>{
    passwordGenerator();
  },[length,numAllowed,charAllowed,passwordGenerator])
  

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg pr-3 pl-5 pb-4 pt-2 my-8 text-orange-500 bg-gray-700'>
      <h1 className='flex justify-center text-xl text-slate-100 font-bold'>Random Password Generator</h1>
    <div className='flex rounded-lg gap-3 overflow-hidden px-1 py-4 '>
      <input 
      type="text"
      value={password}
      className='outline-none w-full py-1 px-3 rounded-md'
      placeholder='Password'
      readOnly 
      ref={passwordRef}/>
      <button 
      className='bg-gray-800 text-gray-50 mx-2 px-2 py-1 rounded-md'
      onClick={copyPasswordtoClipboard}>COPY</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
        type="range" 
        min={6} 
        max={100} 
        value={length} 
        className='cursor-pointer'
        onChange={(e)=>{setlength(e.target.value)}} />
        <label >Length : {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={numAllowed}
        id="numberInput"
        onChange={()=>{setNum((prev)=> (!prev));
        }} />
        <label htmlFor="numberInput">Number</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={charAllowed}
        id="charInput"
        onChange={()=>{setChar((prev)=> (!prev));
        }} />
        <label htmlFor="charInput">Special Character</label>
      </div>
    </div>
    
     </div>
    </>
  )
}

export default App
