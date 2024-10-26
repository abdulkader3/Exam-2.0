import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import TodoList from './Pages/TodoList'
import TodoApp from './Pages/TodoApp'
import Login from './Pages/Login'
import Regestion from './Pages/Regestion'
import app from './firebase.config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  const todo = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<TodoList/>}/>
        <Route path='/userprofile' element={<TodoApp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/regestion' element={<Regestion/>}/>
      </Route>
    )
  )


  return (
    <>
    <ToastContainer />
    <RouterProvider router={todo}/>
  
    </>
  )
}

export default App
