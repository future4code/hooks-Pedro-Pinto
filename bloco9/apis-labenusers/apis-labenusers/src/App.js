import React from "react";
import axios from "axios";

const urlCriarUsuario = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {

  headers: {
    Authorization: "pedro-cesar-hooks"

  }
}


class App extends React.Component  {

  state = {
    nomeInput: "", 
    emailInput:"",

  }

  criarUsuario = () => {
   const body = {
    name: this.state.nomeInput,
    email: this.state.emailInput,
   };   
    axios
      .post (urlCriarUsuario, body, headers)
      .then((resposta) => {
        alert(`O usuário ${this.state.nomeInput}  foi criado com sucesso!`)
      })
      .catch((erro)=> {
        console.log(erro.response)
      })
  }

  alterarEstadoNome = (event) => {
  this.setState({nomeInput: event.target.value})
  
  }
  

  alterarEstadoEmail = (event) => {
    this.setState({emailInput: event.target.value})
    }



  render () {
 
    return (
      
    <div>

      <button> Trocar de tela </button>

      <input 
      value= {this.state.nomeInput} 
      onChange={this.alterarEstadoNome}
      placeholder="Nome" />

      <input
      value= {this.state.emailInput} 
      onChange={this.alterarEstadoEmail}     
      placeholder="E-mail" />
      
      <button 
        onClick={this.criarUsuario} >
        Criar Usuário
      </button>


      </div>

  );
}
}
export default App;


