import React,{useState, useEffect} from 'react'

function Github() {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/agrpranjal07')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    },[])
  return (
    <>
    <h1 className='flex font-bold justify-center text-5xl text-green-500 m-10'>Github Follower: 
    {data.followers}</h1>
    <img src="data.avtar_url" alt="Git Picture" width={300}/>
    </>
    
    )
}

export default Github