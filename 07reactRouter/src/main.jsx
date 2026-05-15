import { StrictMode, React } from 'react'
import { createRoot, ReactDom } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Users from './components/Users/Users.jsx'
import Github, { githubInfoLoader } from  './components/Github/Github.jsx'

import About from './components/About/About.jsx'
import Layout from './Layout.jsx'
import Contact from './components/Contact/Contact.jsx'

import { Link } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [{
//       path: '',
//       element: <Home />
//     },
//     {
//       path: 'About',
//       element: <About />
//     },{
//       path:'Contact',
//       element:<Contact />
//     }
//   ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>} />
      <Route path="About" element={<About/>} />
      <Route path="Contact" element={<Contact/>} />
      <Route path="User/:userid" element={<Users />} />
      <Route 
      loader={githubInfoLoader}
      path="Github" 
      element={<Github/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)



/*
createBrowserRouter app ka routing system banata hai, yani URL ke hisaab se kaunsa component render hoga decide karta hai.

path: '/' root route hai, matlab website ka home page. Jab user base URL open karega, ye route match hoga.

element: <Layout /> batata hai ki is route par Layout component load hoga. Layout usually common structure hota hai jaise Navbar, Footer, Sidebar.

children nested routes ke liye hota hai. Iske andar different pages define karte hain jo Layout ke andar render hote hain.

Abhi children: [] empty hai, iska matlab sirf Layout render hoga, andar koi specific page nahi.

Agar Layout ke andar Outlet use karoge, toh children routes usi jagah display honge.
Example:
/ → Layout + Home
/about → Layout + About
Layout ko building samjho, aur children ko rooms:
Building same rahegi
Room URL ke hisaab se change hoga.
Short yaad rakhne wala point:
path = URL
element = kya dikhana hai
children = andar ke pages
*/


