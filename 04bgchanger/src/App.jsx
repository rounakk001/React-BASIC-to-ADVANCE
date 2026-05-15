import { useState } from 'react'

import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (
   <div className="w-full h-screen duration-500" style={{backgroundColor:color} }>


    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-white px-3 py-2 rounded-3xl">

         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Red"}} onClick={()=>{setcolor("Red")}}>Red</button>

         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Black"}} onClick={()=>{setcolor("Black")}}>Black</button>

         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Orange"}} onClick={()=>{setcolor("Orange")}}>Orange</button>

         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"#E6E6FA"}} onClick={()=>{setcolor("lavender")}}>Lavender</button>

         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Pink"}} onClick={()=>{setcolor("Pink")}}>Pink</button>

         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Blue"}} onClick={()=>{setcolor("Blue")}}>Blue</button>

         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Purple"}} onClick={()=>{setcolor("purple")}}>Purple</button>

         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Brown"}} onClick={()=>{setcolor("Brown")}}>Brown</button>

      </div>
    </div>
   </div>

    
  )
}

export default App

/*

// Best / scalable approach:
// Label + actual color value object use karo
// Isse custom names aur proper shades dono milte hain

const colorOptions = [
  { name: "Red", value: "#ef4444" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Green", value: "#22c55e" },
  { name: "Yellow", value: "#eab308" },
  { name: "Purple", value: "#a855f7" },
  { name: "Pink", value: "#ec4899" },
  { name: "Black", value: "#000000" },
];

<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
  {colorOptions.map(({ name, value }) => (
    <button
      key={name} // index se better, stable unique key
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: value }}
    >
      {name}
    </button>
  ))}
</div>


// Kyu optimal?
// 1. Reusable
// 2. Easy to scale
// 3. key={name} better than index
// 4. Custom shades possible
// 5. Cleaner + production style

*/