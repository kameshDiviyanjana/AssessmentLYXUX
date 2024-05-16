import React,{useEffect,useState} from 'react'
import {getNocomplete} from '../api/Todoapi'
import DatanotFoun from './DatanotFoun'
const CompledTsak = () => {

    const [todo,settodo] = useState([])

    const getcompletedTOdo = async()=>{
        const completetask = "com"
        try {
         const response = await getNocomplete(completetask)
         settodo(response.data)
        } catch (error) {
        console.error("Error fetching TODO:", error);
      }
    
    }

    useEffect(()=>{

        getcompletedTOdo()
    },[])
    
  return (
    <div>
      <div className=' w-full h-full bg-white lg:mt-5  mb-16  '>
       <div className=' text-center '>
       <h1 className=' font-semibold text-3xl'> MY COMPLED TO-DO   </h1>
       </div>
      {
       todo.length > 0 ? todo.map((tododata)=>(
            <div className='  flex justify-center mt-2'>
            <div className=' bg-blue-300 lg:flex lg:col-span-3 gap-5 justify-center py-4 px-4  rounded-2xl'>
             <h1>{tododata.addDate}</h1>
             <h1 className=' lg:w-[700px]  max-lg:w-[290px] '>{tododata.dotodescription} </h1>
             <div className=''>
            
             </div>
      
            
            
            </div>
            </div>
        )):<><DatanotFoun data={" Not Task Founed"}/></>
      }
      
       
     
    
      </div>
    </div>
  )
}

export default CompledTsak
