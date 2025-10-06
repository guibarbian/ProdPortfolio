import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';
import styles from './style.module.css'
import Links from './components/Links';

const Formulario = () => {

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        message:''
    });

    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    };

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending')

        try{
            const payload = new FormData();
            payload.append('name', formData.name)
            payload.append('email', formData.email)
            payload.append('message', formData.message)

            const response = await axios.post('https://getform.io/f/bnlnwyxb', payload, {
                headers: { 'Accept': 'application/json', 'Content-Type': 'multipart/form-data' }
            });

            if(response.status === 200){
                toast.success('Mensagem enviada com sucesso')
                setStatus('success')
                setFormData({name: '', email: '', message: ''})
            } else{
                toast.error('Erro ao enviar. Tente novamente.')
                setStatus('error')
            }
        } catch(error){
            toast.error('Erro ao enviar. Tente novamente.');
            setStatus('error')
            console.error(error)
        }
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <ul className={styles.inputList}>
            <li>
                <h2><b>Nome</b></h2>
                <input
                 type="text"
                 name='name'
                 placeholder='Digite aqui o seu nome ou o do seu projeto' 
                 value={formData.name}
                 onChange={handleChange}
                 required/>
            </li>

            <li>
                <h2><b>E-mail</b></h2>
                <input
                 type="email"
                 name='email'
                 placeholder='Digite aqui o seu melhor e-mail' 
                 value={formData.email}
                 onChange={handleChange}
                 required/>
            </li>

            <li>
                <h2><b>Descrição do Projeto</b></h2>
                <textarea
                 name='message'
                 placeholder='Descreva aqui o tipo de projeto que você está buscando' 
                 value={formData.message}
                 onChange={handleChange}
                 required/>
            </li>

            <button
             type='submit'
             disabled={status==='sending'}>
                      {status === 'sending' ? 'Enviando...' : 'ENVIAR'}
            </button>
        </ul>
    </form>

    <Links />
    </>
  )
}

export default Formulario