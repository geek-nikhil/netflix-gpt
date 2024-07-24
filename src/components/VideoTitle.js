import React from 'react'


export default function VideoTitle({title , overview}) {
  return (
      <>
    <div className='pt-52 px-36 absolute text-white font-bold bg-gradient-to-r from-black w-screen h-svh'>
     <h1 className='text-6xl font-bold'>{title}</h1>
     <p className='py-6 text-m w-1/3'>{overview}</p> 
    <div className=''>
     <button className='bg-white text-black p-4 px-12 text-lg bg-opacity-50 rounded-lg mx-1 hover:opacity-90'>▶Play</button>
     <button className='bg-green-700 text-white p-4 px-10 text-lg bg-opacity-50 rounded-lg mx-1'> ℹ️ More Info</button>
    </div>
    </div>
    </>
  )
}
