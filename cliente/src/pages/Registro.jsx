import { useEffect, useState } from "react";
export default function registrar(){
    const [usuarios, setUsuarios] = useState([]);         
    const [email, setEmail] = useState([]);
    useEffect(() => {
      const buscarUsuario = async () => {
        try {
          const resposta = await fetch("http://localhost:3000/usuarios");
          const dados = await resposta.json();
          setUsuarios(dados);
          setEmail(dados);
        } catch {
          alert('Ocorreu um erro no app!');
        }
      }
      buscarUsuario();
    }, [])

const deletar = async(id) => {
         try{
              await fetch('http://localhost:3000/usuario/'+ id ,{
                mathod: 'DELETE'
              });
         }catch{
              alert("Ish lascou!");
         }

}

    return(
        <>
    <table>
        <div className="todos">
        <div className="pagina1">
        <tr>
          <td className="border">Nome</td>
        </tr>
        
        {
            usuarios.map((usuario) =>
                <tr key={usuario.id}>
                  <td>{usuario.nome}</td>
                  <td>{usuario.email}</td>
                  <td> <button onClick={()=> deletar(usuario.id)}> x </button> </td>
            
          <div className="separar">
            <td>{usuario.nome}</td>
          </div>
          </tr>
          )}
          </div>
          
        <div className="pagina2">
  
          <tr>
          <td className="border">E-mail</td>
        </tr>
        {
            email.map((email) =>
                <tr key={email.id}>
              
          <div className="separar">
            <td>{email.email}</td>
          </div>
          </tr>
        )}
        </div>
        </div>  
      </table>
      <div className="botao">
        <button className="link">
        <a href="http://localhost:5173/">
          Menu
        </a>
          </button>
      </div>
        </>
    )
}