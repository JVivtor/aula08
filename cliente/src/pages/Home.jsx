import { useState } from "react";
import useNavigate from "react-router-dom"


export default function Registrar() {
 const [nome, setNome] = useState (""); 
 const [email, setEmail] = useState ("");


const navigate = useNavigate();

  const registrar = async (event) => {
  
  event.preventDefault();
    try{
    const resposta =  await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: nome,
          email: email
          })
      });

          if(resposta.ok){
                   navigate('/')
          }

    } catch{
      alert("Ocorreu um erro na aplicação")
    }};
  return (
    <main>
      <form action="" onSubmit={registrar}>

      <div className="centraliza">
        <div className="separar">
        <input
        placeholder="Nome"
        type="text"
        value={nome}
        onChange={(event) => setNome(event.target.value)}/>
        </div>

        <div className="separar">
        <input
        className="espacamento"
        placeholder="Email"
        type='email'
        value={email}
        onChange={(event) => setEmail(event.target.value)}/>
        </div>
        <button className="salvar">Salvar</button>
        </div>
        <div className="botao">
        <button className="link">
        <a href="http://localhost:5173/registro">
        registro
        </a>
          </button>
        </div>
      </form>
    </main>
    );
}