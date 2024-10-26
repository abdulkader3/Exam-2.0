import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import TodoList from './Pages/TodoList'
import TodoApp from './Pages/TodoApp'

function App() {


  const todo = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<TodoList/>}/>
        <Route path='/userprofile' element={<TodoApp/>}/>
      </Route>
    )
  )


  return (
    <>

    <RouterProvider router={todo}/>
  
    </>
  )
}

export default App
