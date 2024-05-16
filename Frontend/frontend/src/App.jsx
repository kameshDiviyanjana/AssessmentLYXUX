import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Page/Home'
import TodoList from './Page/TodoList'
import DatanotFoun from './componets/DatanotFoun'
import UpdateTodo from './componets/UpdateTodo'
import CompleteTask from './Page/CompleteTask'
import Header from './componets/Header'
function App() {


  return (
    <>
     <Router>
        <Routes>
        <Route path ="" element={<Header/>} > 
        <Route path ="" element={<Home/>} />
           <Route path ="/alltodo" element={<TodoList/>} />
           <Route path ="/update/:pid" element={<UpdateTodo />} />
           <Route path ="/todocomplet" element={<CompleteTask />} />
           <Route path ="*" element={<DatanotFoun data={"404"}/>} />
           </Route>
           
             
              
             
              
           
        </Routes>
     </Router>
    </>
  )
}

export default App
