import React, { useEffect } from 'react'
import './App.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root-layout/Root'
import Aos from 'aos'
import 'aos/dist/aos.css'


function App() {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}></Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App
