import { useState ,useCallback,useEffect,useRef} from 'react'


function App() {
  const [length, setlength]=useState(8)
  const [numberallowed,setnumberallowed]=useState(false)
  const [charallowed,setcharallowed]=useState(false)
  const [password,setpassword]=useState("") 
  const [copied,setcopied]=useState(false)

  const passwordRef=useRef(null);  
  // const buttonRef=useRef(null);

  const passwordgenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberallowed) str+="0123456789"
    if(charallowed) str+="!#$%&'()*+,-./"

    for(let i=1;i<=length;i++){
      const randomindex=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(randomindex);
    }

    setpassword(pass); 


  },[length,numberallowed,charallowed,setpassword])  //yaha pe hum wo dependency daalte hai jo baar baar use hoga memoize krne ke liye

  const copypasswordtoclipboard=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,999);

    window.navigator.clipboard.writeText(password);

    setcopied(true);
  },[password])


  // const changecolor=useCallback(()=>{
  //   buttonRef.current.style.backgroundColor='green';
  //   //buttonRef.current?.style.setProperty('backgroundColor','Green');
  //   buttonRef.current.innerHTML="COPIED!!"
  // },[])

  // const changecolorback=useCallback(()=>{
  //   buttonRef.current.style.backgroundColor='blue';
  //   //buttonRef.current?.style.setProperty('backgroundColor','Green');
  //   buttonRef.current.innerHTML="copy"
  // },[])
  
  useEffect(()=>{passwordgenerator();setcopied(false)},[length,numberallowed,charallowed,passwordgenerator])  //aur yaha dependency inme koi bhi ched chad ho to dubara se run karo

  

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-10 my-8 text-orange-500 bg-gray-800 text-center">
      <h1 className='text-white text-center '>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button onClick={()=>{copypasswordtoclipboard();}} className={`outline-none text-white px-3 py-0.5 shrink-0 ${copied?"bg-green-700":"bg-blue-700"}`} >{copied ? "Copied!!":"Copy"}</button>
          </div>

          <div className="flex text-sm gap-x-2">
            <div className={`flex items-center gap-x-1`}>
              <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setlength(e.target.value)}}
              use
              />
              <label>Length: {length}</label>  
              </div>

              <div className="flex items-center gap-x-1">
                <input 
                type="checkbox"
                defaultChecked={numberallowed}
                id="numberinput"
                onChange={()=>{
                      setnumberallowed((prev)=>(!prev));
                    }}
                 />
                 <label htmlFor='numberInput'>number</label>
              </div>
              <div className='flex items-center gap-x-1'>
                 <input 
                type="checkbox"
                defaultChecked={charallowed}
                id="charinput"
                onChange={()=>{
                      setcharallowed((prev)=>(!prev));
                    }}
                 />
                 <label htmlFor='CharacterInput'>Character</label>

              </div>

          </div>
      
    </div>
    </>
  )
}

export default App
