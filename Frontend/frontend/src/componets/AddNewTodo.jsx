import React,{useState,useEffect} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {addtodo} from '../api/Todoapi'

const AddNewTodo = ({hidddiv,refesh}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [description, setdescription] = useState('');

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
};

const formattedDate = startDate ? formatDate(startDate) : '';
  const Addtodowork = async()=>{

   
     const todoadd = {
      dotodescription : description,
      addDate : formattedDate
     }
     
     try{
     await addtodo(todoadd)

     }catch(error){

      console.error("Error ADD TODO:", error);
     }
     hidddiv()
     refesh()
  }

  return (
    <div>
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
                    Addtodowork()
                }}>MY WORK SET</button>
            </div>
    </div>
  )
}

export default AddNewTodo
