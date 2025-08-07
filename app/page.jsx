"use client"
import Button from './components/button';
import { useState } from 'react';
import { toast } from "react-hot-toast"

export default function Home() {


    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [email, setEmail] = useState('');


    const [contatos, setContatos] = useState([])


    const handleSubmit = (e) => {
      e.preventDefault();

      
        try {
          const novoContato = {
            nome: nome,
            idade: idade,
            email: email,
          }

          setContatos((contatosCriados) => [...contatosCriados, novoContato])

          setNome('');
          setEmail('');
          setIdade('');

          toast.success("Contato adicionado com sucesso!");

        } catch (error) {

          toast.error("Erro.")
        } 
    }

  return (
    <div className="w-full h-screen bg-white px-80"> 
      
      <Button />
      
      



    <div className='mt-20  flex justify-around w-full py-4'>

    <div className='w-96'>
        <h1 className='text-2xl px-2 py-4 rounded-md text-center'>Cadastro de Contato</h1>
        
        <div>
            <form >
                <div className='flex flex-col gap-1'>
                    <label>Nome:</label>
                    <input type="text" className='border-0.5 border-zinc-600  rounded-md py-2 focus:ring-2 px-3 ring-2 focus:ring-blue-600 outline-none focus:border-none' value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Digite seu nome...'/>
                </div>
                <div className=' flex flex-col gap-1 mt-1 '>
                  <label>Idade:</label>
                  <input type='text' className='border-0.5 border-zinc-600  rounded-md py-2 focus:ring-2 px-3 ring-2 focus:ring-blue-600 outline-none focus:border-none' value={idade} onChange={(e) => setIdade(e.target.value)} placeholder='Digite sua idade...' />
                </div>
                <div className=' flex flex-col gap-1 mt-1 '>
                  <label>Email:</label>
                  <input type='text' className='border-0.5 border-zinc-600  rounded-md py-2 focus:ring-2 px-3 ring-2 focus:ring-blue-600 outline-none focus:border-none' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Digite seu email...' />
                </div>
                
                <button type='submit' onClick={handleSubmit} className='rounded-sm px-4 mt-4 py-2 hover:bg-cyan-600 duration-150 transition-all  bg-cyan-700 text-white font-semibold text-sm border-1  w-full cursor-pointer'>Enviar Contato</button>
            </form>
        </div>
    </div>

     <div>

      <h1 className='text-2xl px-2 py-4 rounded-md text-center'>Lista de contatos</h1>


      <div>

        {contatos.map((item) => (
              <div key={item.nome} className='mt-2 p-4 bg-gray-100 rounded-md shadow-sm'>
                <h1 className='font-bold'>nome: {item.nome}</h1>
                <p>Idade: {item.idade}</p>
                <p>Email: {item.email}</p>
              </div>
            ))}
      </div>



     </div>



      </div>

     

      
    </div>
  );
}

