import React,{useState} from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from "./components/Layout/Layout.jsx"

import Notfound from "./components/Notfound/Notfound.jsx"


import Login from './components/login/Login'

import jwtDecode from 'jwt-decode'
import Weather from './components/Weather/Weather.jsx'









export default function App() {







// eslint-disable-next-line no-undef
const [userData, setuserData] = useState({})

function saveuserData() {
  let encodedtoken=localStorage.getItem("dataToken")
  let decodedtoken=jwtDecode(encodedtoken)
  setuserData(decodedtoken)

}




let routers=createBrowserRouter([
  {path:"",element:<Layout userData={userData}/>,children:[


      {index:true,element:<Weather/>},

      {path:"weather",element: <Weather/>},


      {path:"*",element: <Notfound/>}
  ]}
])


  return <>
  
  <RouterProvider router={routers}></RouterProvider>
  </>
}
