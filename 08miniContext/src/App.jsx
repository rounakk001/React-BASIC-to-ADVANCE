import { Profiler, useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Profile from './Components/Profile'
import Login from './Components/Login'

function App() {
  

  return (
        <UserContextProvider>
          <h1>  Context Api avoids prop drilling</h1>
          <Login/>
          <Profile/>
        </UserContextProvider>
  )
}

export default App
