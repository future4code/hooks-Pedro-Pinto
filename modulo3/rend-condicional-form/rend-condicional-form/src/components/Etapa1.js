import React from "react";
import { FormContainer } from "./styled";

class Etapa1 extends React.Component {

render() {

    return (
        <FormContainer> 
            
            <h1> ETAPA1 - DADOS GERAIS  </h1>
            <h3>1. Qual o seu Nome? </h3>
            <input></input>  

            <h3>2. Qual a sua idade? </h3>
            <input></input>  

            <h3>3. Qual seu e-mail? </h3>
            <input></input> 
            
            <h3>4. Qual a sua escolaridade? </h3>
            <input></input> 


        </FormContainer>

    )
  }     
}

export default Etapa1   