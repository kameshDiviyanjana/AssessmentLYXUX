import React from 'react'
import perimage from '../assets/giphy.gif'
const DatanotFoun = ({data}) => {
  return (
    <div className=' flex justify-center mt-28   '>
    <div className='flex-col '>
    <div>
     <img src={perimage} alt='image'  />
     </div>
   <div>
   <h1 className=' text-4xl text-center animate-pulse font-extrabold'>{data}</h1>
   </div>
    </div>
    </div>
  )
}

export default DatanotFoun
