import Chai from "./Chai"

function App() {
  let username="rounak"
  
  return (
    //isko fragments bolte hai wrap krta hai ye agar ek se jaada cheeze return kr rahe ho
    <>    
      <Chai />
      <p>kya bhai kya haal hai ${username}</p>

    </>
  )
}

export default App
  