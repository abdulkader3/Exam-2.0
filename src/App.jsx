import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import TodoList from './Pages/TodoList'
import UserProfile from './Pages/UserProfile'

function App() {


  const todo = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<TodoList/>}/>
        <Route path='/userprofile' element={<UserProfile/>}/>
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
