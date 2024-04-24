import React, { useState } from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Header from './pages/Header';
//import Function from the file (Capital!)
import Continents from './pages/Continents';
import Chosen from './pages/Chosen';
import './Style.scss';
import CountryDetails from './pages/CountryDetails';








//it gives me my  html code ( in return)
function App() {

  const router =createBrowserRouter([
    {
      path:'/',
      element: <Header/>,
      children:[
        {
          path: '/',
          element:<Continents/>
        },

        {
          path: 'Chosen',
          element:<Chosen/>
        },
        {
          path: 'CountryDetails',
          element: <CountryDetails />,
        },
        {
          path: '*',
          element:<h1>Error 404</h1>
        }
      ]
    }
  ])

  return(
    <>
      <RouterProvider router ={router}/>

    </>
     
  )
}

export default App
