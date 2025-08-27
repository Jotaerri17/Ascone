"use client"
import Button from './components/button';
import Cadastro from './components/cadastro';
import { useState } from 'react';
import { toast } from "react-hot-toast"


export default function Home() {

  return(
    <>
      <header className='bg-gradient-to-r from-gray-50 to-gray-300'>
             
        
        <nav className=' flex  justify-between items-center py-6 mx-10'>
          
          <h1 className='text-black text-3xl  font-extrabold'>Ascone</h1>

          <div className='flex space-x-44 '>
            <h1 className=' text-black text-md cursor-pointer font-semibold hover:border-b-1'> Home </h1>
            <h1 className=' text-black text-md cursor-pointer font-semibold hover:border-b-1'> Company </h1>
            <h1 className=' text-black text-md cursor-pointer font-semibold hover:border-b-1'> Help </h1>
          </div>
          
          <div className='flex space-x-10 items-center'>
              <h1 className=' text-md cursor-pointer font-semibold'> Login </h1>
              <h1 className=' text-white text-sm cursor-pointer border-2 border-green-900 bg-green-900 rounded-2xl px-4 py-2 font-semibold hover:bg-green-700 hover:border-green-700 duration-150'> Sign Up  </h1>
          </div>
          
        </nav>
      <div className="w-full h-0.5 bg-black ">l</div>

        
    
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-gray-50 to-gray-300 p-8">
      
      
      <div className="flex-1 flex flex-col justify-center p-8  ">
        <h1 className="text-6xl font-semibold italic">Mude a forma 
          como você usa
           seu dinheiro</h1>
        <p className="mt-4 text-sm  text-gray-600 italic">
          Simplifique sua vida financeira com nosso aplicativo.
        </p>
        <button className="mt-8  cursor-pointer bg-green-900 text-white py-3 px-6 border-2 rounded-lg  font-semibold self-start  hover:bg-green-700 duration-150">
          Comece Agora
        </button>
      </div>
      
      
      <div className="flex-1 p-4 flex items-center justify-center">
       
        <div className="bg-white border border-gray-300 rounded-2xl w-full max-w-sm h-96 flex items-center justify-center text-gray-400">
          (Img)
        </div>
      </div>
    </div>  
        

      </header>
        
      <div className='flex flex-col  bg-gradient-to-r from-gray-50 to-gray-300 h-[400px] w-full'>

        <h1 className='flex  justify-center font-bold text-3xl'>Vantagens da Ascone</h1>

        <div className='flex  justify-around  h-[300px] '>

          <div className='flex flex-col mt-12 w-sm items-center border-2 rounded-3xl  bg-gradient-to-br from-gray-100 to-gray-500'>

            
            <h1 className='font-bold mt-4'>Vantagens do Cartão</h1>
            <ul className=' list-disc flex flex-col mt-8  font-semibold gap-4'>
              
              <li>Cartão sem anuidade para sempre</li>
              <li>Aprovação rápida e 100% digital</li>
              <li>Limite que cresce junto com você</li>
            </ul>
          </div>



          <div className='flex flex-col mt-12 items-center w-sm  border-2 rounded-2xl  bg-gradient-to-br from-gray-100 to-gray-500'>
            <h1 className='font-bold mt-4'>Vantagens Financeiras</h1>
            <ul className=' list-disc flex flex-col mt-8  font-semibold gap-4'>
              <li>Rendimento automático do seu dinheiro</li>
              <li>Transferências e PIX gratuitos</li>
              <li>Empréstimos com taxas justas e transparentes</li>
            </ul>
          </div>



          <div className='flex flex-col mt-12 items-center w-sm border-2 rounded-2xl  bg-gradient-to-br from-gray-100 to-gray-500'>
            <h1 className='font-bold mt-4'>Estilo de Vida</h1>
            <ul className=' list-disc flex flex-col mt-8  font-semibold gap-4'>
              <li>Seu banco em qualquer lugar do mundo</li>
              <li>Pagamentos rápidos por aproximação</li>
              <li>Segurança de nível internacional</li>
            </ul>
            </div>
          </div>

      
      </div>

    </>
  )
}

