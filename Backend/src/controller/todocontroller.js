import {asyerrohander} from '../utile/error.js'
import {makerespon} from '../utile/makerespon.js'
import {addtodoServices,removeTodobyid,AllTodoservice,getTodoByIDService,updateTodoService,getNotcomplet} from '../services/addtodoServices.js'
export const  addtodo =asyerrohander(async (req, res,next)=>{

    const Addtodo = req.body;
    const todoadd = await addtodoServices(Addtodo);
return makerespon({
    res,
    data: todoadd,
    message: "Add To-do  successfully",
  });
}) 

export const AllTodo = asyerrohander(async(req, res,next)=>{

    const todoall = await AllTodoservice();
    return makerespon({ res, data: todoall, message: ' retrieved All successfully' });
    
})

export const getTodoByID= asyerrohander(async(req, res,next)=>{

   
    const todoavailable = await getTodoByIDService(req.params.id);
  
  return makerespon({
    res,
    data: todoavailable,
    message: "One TODO find successfully",
  });

})

export const deleteTodo =  asyerrohander(async(req, res,next)=>{

    const removebyid = await removeTodobyid(req.params.id);
    return makerespon({
      res,
      data: removebyid,
      message: "remove TODO successfully",
    });

})

export const UpdateTodo =  asyerrohander(async(req, res,next)=>{

    const updateTodolist = await updateTodoService(req.params.id,req.body)
    return makerespon({ res, data: updateTodolist, message: 'TODO updated successfully' });
})

export const findNotComplete = asyerrohander(async(req, res,next)=>{

   
    const todoavailable = await getNotcomplet(req.params.complete);
  
  return makerespon({
    res,
    data: todoavailable,
    message: "One TODO find successfully",
  });

})
