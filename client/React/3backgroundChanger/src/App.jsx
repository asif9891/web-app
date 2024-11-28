import { useState } from 'react'

function App() {
  const [bgcolour, setbgcolour] = useState("rgba(111, 216, 216, 0.789)");

  return (
    <>
      <div className='w-full h-screen ' style={{backgroundColor: bgcolour}}>

        <section className=' flex flex-col absolute w-20 border-2 right-0 top-10 mx-3 flex align-item py-2 px-2.5 rounded-md bg-white'>
          <button className='border-2 w-14 rounded-md py-2 bg-red-500' onClick={()=>setbgcolour("rgb(239 68 68)")}>Red</button>
          <button className='border-2 w-14 rounded-md py-2 bg-green-500' onClick={()=>setbgcolour("rgb(52 211 153)")}>Green</button>
          <button className='border-2 w-14 rounded-md py-2 bg-blue-400' onClick={()=>setbgcolour("rgb(96 165 250)")}>Blue</button>
          <button className='border-2 w-14 rounded-md py-2 bg-indigo-600' onClick={()=>setbgcolour("rgb(79 70 229)")}>Indigo</button>
          <button className='border-2 w-14 rounded-md py-2 bg-violet-400' onClick={()=>setbgcolour("rgb(167 139 250)")}>Violet</button>
          <button className='border-2 w-14 rounded-md py-2 bg-sky-400' onClick={()=>setbgcolour("rgb(56 189 248)")}>Sky</button>
        </section>
        
      </div>
    </> 
  )
}

export default App
