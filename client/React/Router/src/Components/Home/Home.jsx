import React from 'react'

function Home() {
  return (
    <div className='w-full block h-auto '>
        <section className='flex flex-row gap-x-16 mx-9' >
            <div className=' border-1 w-1/2  border-indigo-600 relative left[10rem]'>
                <h1 className='inline-block w-2/3 text-pretty text-4xl my-5 mx-32 p-4 font-sans font-bold'>Communicate. Collaborate. Create.</h1>
                <span className='inline-block w-2/3 text-pretty text-sm my-1 mx-32 p-4 '>WeDu provides an effective and powerful way to manage your projects</span>
                <button className='p-4 bg-black text-white rounded-lg mx-36'>Get Started</button>
            </div>
            <div className='my-8 mx-14'>
                <img src="src\Components\Home\Screenshot 2024-03-17 141702.jpg" className='h-18 p-4' alt="" width={"300px"} height={"300px"} />
            </div>
        </section>
    </div>
  )
}

export default Home
