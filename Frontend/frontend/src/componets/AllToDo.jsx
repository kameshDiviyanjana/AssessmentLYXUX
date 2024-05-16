import React,{useEffect,useState} from 'react'
import {gettodo,deletetodo} from '../api/Todoapi'
import DatanotFoun from './DatanotFoun'
import Sweetalert2 from "sweetalert2";
import { useNavigate } from 'react-router-dom';
const AllToDo = () => {
    const [todo,settodo] = useState([])
    const navigate = useNavigate();
     const getTodo = async()=>{

        try {
            const response = await gettodo()
            settodo(response.data)
           } catch (error) {
           console.error("Error fetching TODO:", error);
         }
         
     }
     const navigateupdate = (id)=>{
 
        navigate(`/update/${id}`)
     }
     const deletetolist = async(id)=>{
        Sweetalert2.fire({
            title: 'Are you sure?',
            text: "You want be able to delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {

            if(result.isConfirmed){
                try {
                    const response = await deletetodo(id)
                    if (response.data) {
                        Sweetalert2.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        getTodo()
                    } else {
                        Sweetalert2.fire(
                            'Not Deleted!',
                            'Something want wrong',
                            'error'
                        )
                     
                    }
                   } catch (error) {
                   console.error("Error fetching Todo:", error);
                 }
            }
        })
     }
    useEffect(()=>{
        getTodo()
         
    },[])
  return (
    <div>
          
      <div className=' w-full h-full bg-white lg:mt-5  mb-16  '>
       <div className=' text-center '>
       <h1 className=' font-semibold text-3xl'> MY TO-DO</h1>
       </div>
      {
        todo.length > 0 ? todo.map((tododata)=>(
            <div className='  flex justify-center mt-2'>
            <div className={`  lg:flex lg:col-span-3 gap-5 justify-center py-4 px-4  rounded-2xl shadow-2xl ${tododata.complete == "No" ? ' bg-blue-300':' bg-slate-200'}`}>
             <h1>{tododata.addDate}</h1>
             <h1 className={`lg:w-[700px]  max-lg:w-[290px] ${tododata.complete == "com" && 'line-through'}`}>{tododata.dotodescription} </h1>
             <div className=' flex flex-row lg:gap-5  max-lg:justify-end max-lg:gap-3'>
             
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600 cursor-pointer" onClick={()=>{
                deletetolist(tododata._id)
             }}>
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-yellow-400 cursor-pointer" onClick={()=>{
    navigateupdate(tododata._id)
}}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
</svg>


             </div>
      
            
            
            </div>
            </div>
        )) :<><div><DatanotFoun data={"Data Not Founed"}/> </div></>
      }
      
       
     
    
      </div>
    </div>
   
  )
}

export default AllToDo
