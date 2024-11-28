import React from 'react'
import Input from './components/InputContainer'

function App() {
  return (
    <div className="w-full">
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <Input label="From" className="my-2"/>
        <button  type="button" className="absolute  left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-4 py-3">Swap</button>
        <Input label="to"/>
      </div>
    </div>
  )
}

export default App
