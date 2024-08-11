import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Resume from './pages/Resume';
import ErrorPage from './components/error/ErrorPage.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          index: true,
          element: <Home/>,
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/projects",
          element: <Project/>
        },
        {
          path: "/resume",
          element: <Resume/>
        },
      ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
