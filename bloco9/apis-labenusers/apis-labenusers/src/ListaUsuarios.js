import axios from 'axios';
import React from 'react';
 
const urlPegarUsuario = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
 
const headers = {
  headers: {
   Authorization: "pedro-cesar-hooks"}
  };
 
 
class ListaUsuarios extends React.Component {
 
state = {
   listaUsuarios: [],
  
}

componentDidMount() {
  this.pegarUsuarios();
}
 
  
pegarUsuarios = () => {
 axios
   .get(urlPegarUsuario,headers)
   .then ((resposta) => this.setState ({listaUsuarios : resposta.data}))
   .catch((erro)=> console.log (erro.data))
}
 
  
render() {
 return (
   <div>

    {this.state.listaUsuarios.length > 0 
    
    (this.state.listaUsuarios.map ((usuario) => (
    <p key= {usuario.id}>
      {usuario.name}
      </p>

    ))
    
   ) }

   </div>
 
   )
 }
} 
 
export default ListaUsuarios;