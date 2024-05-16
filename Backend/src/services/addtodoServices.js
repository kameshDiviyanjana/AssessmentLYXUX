
import {createTodo,rempveReposutery,findAllTodo,findToDoById,updateTodoRepositery,findNotComplete} from '../repositery/createTodo.js'

import { default as createError } from 'http-errors';
export const addtodoServices= async(data)=>{


    const todo = await createTodo({
        ...data
     });
    
     return todo;

}

export const removeTodobyid = async(id)=>{

     const deleteTodo =  await rempveReposutery({ _id: id });
     return deleteTodo
}

export const AllTodoservice = async()=>{

    const couser =  findAllTodo()
    return couser

}

export const getTodoByIDService = async(id)=>{

    const coures = await findToDoById(id);
    if (!coures) throw new createError(401, 'Invalid order ID');
    return coures;
}

export const updateTodoService = async(id,payload)=>{

    const updatedevice = await updateTodoRepositery({ _id: id }, payload);
    return updatedevice;
}

export const getNotcomplet =async(com)=>{
    
    const todo = await findNotComplete(com);
    if (!todo) throw new createError(401, 'Invalid order ID');
    return todo;
}