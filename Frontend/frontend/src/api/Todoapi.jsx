
import axios from "axios";

export const gettodo = async () => {
    try {
      const response = await axios.get('http://localhost:8082/to-do');
      return response.data;
    } catch (error) {
      console.error("Error fetching TODO:", error);
      throw error;
    }
  };

export const updatetask = async (id,data)=>{

    try {
        const response = await axios.patch(`http://localhost:8082/to-do/${id}`,data);
        return response.data;
      } catch (error) {
        console.error("Error fetching TODO:", error);
        throw error;
      }
}

export const getNocomplete = async (data)=>{

    try {
        const response = await axios.get(`http://localhost:8082/to-do/notcom/${data}`);
        return response.data;
      } catch (error) {
        console.error("Error fetching TODO:", error);
        throw error;
      }
}

export const deletetodo = async(id)=>{

    try {
        const response = await axios.delete(`http://localhost:8082/to-do/${id}`);
        return response.data;
      } catch (error) {
        console.error("Error fetching TODO:", error);
        throw error;
      }
}
export const getTodoByid =  async(id)=>{

    try {
        const response = await axios.get(`http://localhost:8082/to-do/${id}`);
        return response.data;
      } catch (error) {
        console.error("Error fetching TODO:", error);
        throw error;
      }
}

export const addtodo = async(data)=>{

  try {
      const response = await axios.post(`http://localhost:8082/to-do`,data);
      return response.data;
    } catch (error) {
      console.error("Error Add TODO:", error);
      throw error;
    }
}