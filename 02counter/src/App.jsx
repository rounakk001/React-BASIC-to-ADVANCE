import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

/*
React mein Hook kya hai? Yeh ek special function hai
 jo functional components mein state, lifecycle methods, aur 
 React ke aur features ko use karne ki permission deta hai. 
 Hooks ka use class components likhe bina stateful logic add karne ke liye hota hai.
 */

function App() {
  //basically counter value hold kr raha and setcounter ek method hai jo counter ki value change kr raha  
  let [counter,setcounter]=useState(10);   //use state tb use krte hai jb koi value change krni ho aur UI ko update krna ho
  
  const addValue=() => {
    console.log(counter);
    //setcounter basically counter ki value change kr ke ui ke saath sync kr raha hai

    if(counter<20)
    setcounter(counter+1);
   
  }

  const removeValue=()=>{
    console.log(counter)
  
    if(counter>0)
    setcounter(counter-1)
    
  }

  return (
    <>
      <section id="center">
        <h1>Chai aur react</h1>
        <h2>Counter Value: {counter}</h2>
        <button onClick={addValue}>Add value</button>
        <button onClick={removeValue}>Remove value</button>
      </section>

    </>
  )
}

export default App
