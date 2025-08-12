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
              <h1 className=' text-white text-sm cursor-pointer border-2  bg-green-800 rounded-2xl px-4 py-2 font-semibold '> Sign Up  </h1>
          </div>
          
        </nav>
      <div className="w-full h-[2px] bg-gray-400"></div>

        
    
    <div className="flex flex-col md:flex-row min-h-screen  bg-gray-50 p-8">
      
      
      <div className="flex-1 flex flex-col justify-center p-12  ">
        <h1 className="text-6xl font-semibold italic">Mude a forma 
          como você usa
           seu dinheiro</h1>
        <p className="mt-4 text-sm  text-gray-600 italic">
          Simplifique sua vida financeira com nosso aplicativo.
        </p>
        <button className="mt-8  cursor-pointer bg-green-800 text-white py-3 px-6 border-2 rounded-lg  font-semibold self-start ">
          Comece Agora
        </button>
      </div>
      
      
      <div className="flex-1 p-4 flex items-center justify-center">
       
        <div className="bg-white border border-gray-300 rounded-2xl w-full max-w-sm h-96 flex items-center justify-center text-gray-400">
          (Aqui fica o celular e os outros widgets)
        </div>
      </div>
    </div>  
        

      </header>  

    </>
  )
}

