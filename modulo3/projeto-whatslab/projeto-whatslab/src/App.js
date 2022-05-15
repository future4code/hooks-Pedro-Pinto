import React from "react";
import styled from 'styled-components';


const AppContainer = styled.div`

  border: 1px solid black;
  height: 100vh;
  box-sizing:border-box;
  width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column; 

`

const MensagemContainer = styled.div `
  flex-grow: 1;
  padding: 8px;
  display:flex;
  flex-direction: column-reverse;
`

const InputContainer = styled.div `
display: flex;

`
const NomeInput = styled.div `
width: 100px;
`

const MensagemInput = styled.div `
flex-grow:1;
`
 
class App extends React.Component { 
state = {
 
 mensagens: [ ],
 
   inPutNome: '',
   inPutMensagem: '',
 
}
 
upToDateNome = (event) => {
 this.setState({
   inPutNome : event.target.value
 })
 
}
 
 upToDateMensagem = (event) => {
   this.setState({
     inPutMensagem : event.target.value
   })
 
}
 
   enviarMensagem = () => {
   const novaMensagem = {
     usuario: this.state.inPutNome,
     texto: this.state.inPutMensagem,
   }
   const novaListaDeArray = [novaMensagem,...this.state.mensagens]
 
  this.setState ({mensagens : novaListaDeArray, inPutMensagem : "" })
  
}
 
 render () {
 
   return (
 
        <AppContainer>

          <MensagemContainer>
        
            {this.state.mensagens.map((mensagens, index) => {
              return <p key = {index} >
                <strong> {mensagens.usuario} </strong>: {mensagens.texto}
                      </p>
            })}

          </MensagemContainer>
          
          <InputContainer>
            <NomeInput>
              <input placeholder='Usuário'
              value = {this.state.inPutNome}
              onChange ={this.upToDateNome}
              />
            </NomeInput>

            <MensagemInput>
              <input  placeholder='Mensagem'
              value = {this.state.inPutMensagem}
              onChange ={this.upToDateMensagem }
              />
            </MensagemInput>

            <button onClick = {this.enviarMensagem}> Enviar </button>
                
          </InputContainer>
          
        </AppContainer>
    
 );
}
}
 
export default App;
