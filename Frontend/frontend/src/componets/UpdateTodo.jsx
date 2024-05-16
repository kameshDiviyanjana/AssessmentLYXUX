
import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getTodoByid,updatetask } from '../api/Todoapi';
import { useParams,useNavigate } from 'react-router-dom';
import Sweetalert2 from "sweetalert2";

const UpdateTodo = () => {
    const { pid } = useParams();
    const navigate = useNavigate();
    const [description, setdescription] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [tododata, settododata] = useState([]);

    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${year}-${month}-${day}`;
    };

    const formattedDate = startDate ? formatDate(startDate) : '';
 console.log(formattedDate)
    const getToDodata = async () => {
        try {
            const response = await getTodoByid(pid);
            console.log("Response data:", response); // Log response data
            if (response.data) { // Check if response.data is an array
                settododata(response.data);
            } else {
                console.error("Invalid response data:", response.data);
            }
        } catch (error) {
            console.error("Error fetching todo data:", error);
        }
    }
   const updatetodolist = async(id,datacomplete,incomedate)=>{
      const complete = datacomplete
    
     
    const updatedata = {
        dotodescription: description || (tododata && tododata.dotodescription),complete,addDate : formattedDate || incomedate
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
            navigate('/alltodo')
       } catch (error) {
       console.error("Error fetching users:", error);
     }
   
   }
    useEffect(() => {
        getToDodata();
    }, [pid]);

    return (
        <div className='py-4 px-4 flex justify-center lg:mt-12'>
            <div className='py-5 px-6 flex flex-col '>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="dd-MM-yyyy" className='outline-none border border-blue-500' />
                <label className='mt-2 font-bold'>TODO description</label>
                <textarea
                    placeholder='Description'
                    className='py-3 px-5 lg:w-[500px] outline-none border border-blue-500 mt-3'
                    rows={5}
                    cols={5}
                    onChange={(e) => {
                        setdescription(e.target.value);
                    }}
                    required
                />
                <button className='mt-4 ml-2 py-2 px-8 text-white rounded-xl bg-green-500 outline-none border hover:border-green-600 hover:bg-white transition ease-out delay-75 hover:text-black' onClick={()=>{
                    updatetodolist(tododata._id,tododata.complete,tododata.dotodescription,tododata.addDate)
                }}>UPDATE</button>
            </div>
            <div>
                
                 <div className='mt-4 py-4 px-3' >
                            <h1>{tododata.addDate}</h1>
                            <h1>{tododata.dotodescription}</h1>
                         
                        </div>
               
            </div>
        </div>
    )
}

export default UpdateTodo;



