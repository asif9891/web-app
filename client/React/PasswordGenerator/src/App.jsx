import { useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useState } from "react"

function App() {
  
  const [length, setlength] = useState(8);
  const [number,isnumber] = useState(false);
  const [character, ischaracter] = useState(false);
  const [password, setpassword] = useState("");

  const copytext = useRef(null);

  const generatePassword = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str += "0123456789"
    if(character) str += "~!@#$%^&*()[]';,./{}"

    for (let i = 1; i <= length; i++) {
      let element = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(element);
    }
    setpassword(pass);
  },[length,number,character,setpassword])

const copypassword = useCallback(() => {
    copytext.current?.select();
    copytext.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
},[password])  

  useEffect(()=>generatePassword(),[length,number,character,generatePassword])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3 text-lg">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" className="outline-none w-full py-1 px-3" value={password} placeholder="Password" ref={copytext}/>
          <button className="utline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copypassword}>Copy</button>
        </div>
        <div className="flex flex-row gap-2">
          <input type="range"  id="passwordLength" min={8} max={100} value={length} onChange={(e)=>{setlength(e.target.value)}} />
          <label htmlFor="password Length">Length {length}</label>

          <input type="checkbox" defaultChecked={number} id="Number" className="relative left-1" onChange={()=>{isnumber(prev => !prev)}}/>
          <label htmlFor="Number">Number</label>
          <input type="checkbox" defaultChecked={character} id="character" className="relative left-1" onChange={()=>{ischaracter(prev => !prev)}}/>
          <label htmlFor="character">character</label>
        </div>
      </div>
    </>
  )
}

export default App
