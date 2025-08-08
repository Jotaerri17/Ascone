"use client"
import Button from './components/button';
import Cadastro from './components/cadastro';
import { useState } from 'react';
import { toast } from "react-hot-toast"


export default function Home() {

  return(
    <>
      <header>
             
        
        <nav className=' flex  justify-between items-center py-6 mx-10'>
          
          <h1 className='text-black text-3xl  font-extrabold'>Ascone</h1>

          <div className='flex space-x-44'>
            <h1 className=' text-black text-md cursor-pointer font-semibold hover:border-b-1'> Home </h1>
            <h1 className=' text-black text-md cursor-pointer font-semibold hover:border-b-1'> Company </h1>
            <h1 className=' text-black text-md cursor-pointer font-semibold hover:border-b-1'> Help </h1>
          </div>
          
          <div className='flex space-x-10 items-center'>
              <h1 className=' text-md cursor-pointer font-semibold'> Login </h1>
              <h1 className=' text-black text-sm cursor-pointer border-2  border-green-800 rounded-2xl px-4 py-2 font-semibold hover:bg-green-900 hover:text-white transition-all duration-150'> Sign Up  </h1>
          </div>
          
        </nav>
      </header>  
    </>
  )
}

