import express from 'express';
import {addtodo,AllTodo,getTodoByID,deleteTodo,UpdateTodo,findNotComplete} from '../controller/todocontroller.js'
const todo = express.Router();

todo.post('/',addtodo);
todo.get('/',AllTodo);
todo.get('/:id',getTodoByID);
todo.delete('/:id',deleteTodo);
todo.patch('/:id',UpdateTodo)
todo.get('/notcom/:complete',findNotComplete)

export default todo