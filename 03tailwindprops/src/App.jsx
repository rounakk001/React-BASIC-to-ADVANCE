import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  /*
  leading-none → extra vertical space hataega
  px-4 py-2 → proper padding
  flex justify-center → exact center
  inline-block → sirf text jitna background
  */

  return (
    <>
    <section id="center">
    <div className="flex justify-center mt-5">
    <h1 className="bg-green-400 text-black px-3 py-2 leading-none inline-block rounded-xl"> Tailwind test </h1>
    </div>
      <Card username="CodewithRounak"/>
      <Card username="Codewith001" btnText="click me"/>
    </section>
    </>
  )
}


export default App
