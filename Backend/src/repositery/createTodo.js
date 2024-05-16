import todo from "../modul/tobomodule.js";

export const createTodo = async(datatodo)=>{

    const newTodo = (await new todo(datatodo).save()).toObject();
       
    return newTodo;
}


export const rempveReposutery = async(filter)=>{


    const tododelte  = await todo.findByIdAndDelete(filter)
    return tododelte
}

export const findAllTodo = async ()=>{

    const allcouse = await todo.find()
    return allcouse
}


export const  findToDoById = async (filter)=>{
    const todofind = await todo.findOne({_id : filter})
    if (!todofind) {
      console.log('No TODO found .');
       return null;
       
     }
    return todofind
}

export const updateTodoRepositery = async(filters, data)=>{

    try {
        const todos = await todo.findByIdAndUpdate(filters._id, data);
        if (!todos) {
          logger.warn('No TODO found with filters:', filters);
          return null;
        }
        
        return todos;
      } catch (e) {
        console.log(e.message)
        throw e;
      }

}

export const findNotComplete =async (filter)=>{
    const todofind = await todo.find({complete : filter})
    if (!todofind) {
      console.log('No TODO found .');
       return null;
       
     }
    return todofind
}