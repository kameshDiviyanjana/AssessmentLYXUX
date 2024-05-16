import React,{useState,useEffect} from 'react'
import Sweetalert2 from "sweetalert2";
import {gettodo,updatetask,getNocomplete} from '../api/Todoapi'
import { useNavigate } from 'react-router-dom'
import DatanotFoun from './DatanotFoun'


import AddNewTodo from './AddNewTodo'
const HomeComponet = () => {

    const navigate = useNavigate();
     const [todo,settodo] = useState([])
     const [complete,setcomplete] =useState()
     const [hidden,sethidden] = useState(true)


     const hiddfrom = ()=>{
      sethidden(!hidden)
     }

      const getAllTOdo = async()=>{
        const notcomplete = "No"
        try {
         const response = await getNocomplete(notcomplete)
         settodo(response.data)
        } catch (error) {
        console.error("Error fetching users:", error);
      }
    
    }
    const navigateAlltodo =()=>{
        navigate('/alltodo')
     
    }
    const navigateCompletedTask =()=>{
      navigate('/todocomplet')
    }
        const taskcompleteUpdate = async(id,description)=>{
     
        const dotodescription = description
        const complete = "com";
        const updatedata = {
            dotodescription,complete
        }
        try {
            const response = await updatetask(id,updatedata)
            if (response) {
                Sweetalert2.fire({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    icon: 'success',
                    title : 'Congaulatio you tasck completed'
                });}
            getAllTOdo()
           } catch (error) {
           console.error("Error fetching users:", error);
         }
        
     
        
    }
   
      useEffect(()=>{

        getAllTOdo()
      },[])
      console.log(complete)
      console.log(todo)
    
  return (
    <div className=' py-5 px-5'>
      <div className='  h-full w-full bg-white'>
       
       <div className=' lg:grid lg:grid-cols-3 gap-4 py-4 px-2 justify-center'>
       <div className=' h-full w-full  bg-white flex  flex-col justify-center py-2 px-4  '>
   <div className='  bg-white  rounded-3xl  lg:shadow-2xl '  onClick={hiddfrom}>
   <div className='flex justify-center '>
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-15 text-blue-400"  onClick={hiddfrom} >
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" onClick={hiddfrom}/>
</svg>

  </div>
   <div  className='flex justify-center  '>
   <h1>ADD To-Do</h1>
   </div>
   </div>
          </div>
          <div className=' h-full w-full  bg-white flex  flex-col justify-center py-2 px-4  max-lg:mt-2  '>
   <div className='  bg-white  rounded-3xl  lg:shadow-2xl '>
   <div className='flex justify-center '>
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-15 text-purple-500"  onClick={navigateAlltodo}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>

  </div>
   <div  className='flex justify-center  '>
   <h1>My  To -Do</h1>
   </div>
   </div>
          </div>

          <div className=' h-full w-full  bg-white flex  flex-col justify-center py-2 px-4  max-lg:mt-2  '>
   <div className='  bg-white  rounded-3xl lg:shadow-2xl '>
   <div className='flex justify-center '>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-15 text-yellow-300" onClick={navigateCompletedTask}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
</svg>
  </div>
   <div  className='flex justify-center  '>
   <h1>copmete task</h1>
   </div>
   </div>
          </div>
       </div>
      </div>
      <div className={`${hidden && 'hidden '}`}>
        <div className=' h-full w-full  bg-slate-100 shadow-xl flex justify-center'>
         <AddNewTodo hidddiv={hiddfrom} refesh ={getAllTOdo}/>
        </div>
      </div>
      <div className=' w-full h-full bg-white lg:mt-5  mb-16  '>
       <div className=' text-center '>
       <h1 className=' font-semibold text-3xl'> MY TO-DO NOT COMPLED </h1>
       </div>
      {
       todo.length > 0 ? todo.map((tododata)=>(
            <div className='  flex justify-center mt-2'>
            <div className=' bg-blue-300 lg:flex lg:col-span-3 gap-5 justify-center py-4 px-4  rounded-2xl'>
             <h1>{tododata.addDate}</h1>
             <h1 className=' lg:w-[700px]  max-lg:w-[290px] '>{tododata.dotodescription} </h1>
             <div className=''>
             <input type="checkbox" id="vehicle1" name="vehicle1" value="com"  className=' w-16 h-14  ' onClick={()=>{
                taskcompleteUpdate(tododata._id,tododata.dotodescription)
             }}  />
             </div>
      
            
            
            </div>
            </div>
        )):<><DatanotFoun data={" Not Task Founed"}/></>
      }
      
       
     
    
      </div>
    </div>
  )
}

export default HomeComponet
