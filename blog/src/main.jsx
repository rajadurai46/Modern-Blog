import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Blogs from './Pages/Blogs.jsx'
import Services from './Pages/Services.jsx'
import Contact from './Pages/Contact.jsx'
import Singleblog from './Pages/Singleblog.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },

      {
        path: "/about",
        element: <About/>
      },

      {
        path: "/blogs", 
        element: <Blogs/>
      },

      {
        path: "/contact",
        element: <Contact/>
      },

      {
        path: "/services",
        element: <Services/>
      },

      {
        path: "/blogs/:id",
        element: <Singleblog/>,
        loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
      }

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
