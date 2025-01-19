import React from 'react'

const Newsletterbox = () => {

    const onSubmitHandler = (event) =>{
        event.preventDefault();
        
    }
  return (
    <div className='text-center'>
        <p className='text-3xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, quas?
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 pl-3'>
            <input className='w-full h-10 sm:flex-1 outline-none border placeholder:pl-1 text-sm' type="text" name="" id="" placeholder='Enter your Email' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-3'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default Newsletterbox