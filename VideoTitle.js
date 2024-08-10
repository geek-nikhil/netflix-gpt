import React from 'react'


export default function VideoTitle({title , overview}) {
  return (
      <>
    <div className='md:pt-52 pt-28 md:pb-72 pb-12 absolute text-white font-bold bg-gradient-to-r from-black w-screen opacity-80 z-10'>
     <h1 className='md:text-6xl text-2xl font-bold'>{title}</h1>
     <p className='md:py-6 md:text-m md:w-1/3 hidden sm:block'>{overview}</p> 
    <div className=''>
     <button className='bg-white text-black md:p-4 md:px-12 p-1 text-lg mt-2 bg-opacity-50 rounded-lg mx-1 hover:opacity-90'>▶Play</button>
     <button className='bg-green-700 text-white md:p-4 md:px-10 p-1 mt-2 text-lg bg-opacity-50 rounded-lg mx-1'> ℹ️ More Info</button>
    </div>
    </div>
    </>
  )
}
