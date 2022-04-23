import React from 'react'
import excited from '../../Assets/so-excited-freaking.gif'

const Container = () => {
  return (
    <div className='w-full grid md:grid-cols-2 gap-2 h-[92vh]'>
        <div className='flex justify-center items-center m-10'>
        <div className='grid grid-cols-3 grid-rows-3'>
            <div className='w-[7rem] h-[7rem] flex justify-center items-center text-4xl font-bold border-r-2 border-b-2 border-black'>X</div>
            <div className='w-[7rem] h-[7rem] flex justify-center items-center text-4xl font-bold border-b-2 border-r-2 border-black'>X</div>
            <div className='w-[7rem] h-[7rem] flex justify-center items-center text-4xl font-bold border-b-2 border-black'>X</div>
            <div className='w-[7rem] h-[7rem] flex justify-center items-center text-4xl font-bold border-r-2 border-b-2 border-black'>X</div>
            <div className='w-[7rem] h-[7rem] flex justify-center items-center text-4xl font-bold border-r-2 border-b-2 border-black'>X</div>
            <div className='w-[7rem] h-[7rem] flex justify-center items-center text-4xl font-bold border-b-2 border-black'>X</div>
            <div className='w-[7rem] h-[7rem] flex justify-center items-center text-4xl font-bold border-r-2  border-black'>X</div>
            <div className='w-[7rem] h-[7rem] flex justify-center items-center text-4xl font-bold border-r-2  border-black'>X</div>
            <div className='w-[7rem] h-[7rem] flex justify-center items-center text-4xl font-bold'>X</div>
            </div>
        </div>
        <div className='flex flex-col  md:mt-[11rem] md:ml-[4rem] m-auto '>
            <div className='text-4xl font-bold'>Welcome To Tic Tac Toe</div>
            <div className='flex'><div className='m-2'>Turn for X</div> <button className='w-[5rem] ml-[5rem] border-2 mt-2 border-black'>Reset</button></div>
            <div>
            <img className='w-[150px] h-[200px]'src={excited} alt="" />
           </div>
        </div>
        
    </div>
  )
}

export default Container