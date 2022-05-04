import React from 'react';
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';
import { FormContainer } from './components/styled';


class App extends React.Component {
  
    state = {
      etapa:1,

    };
    ProximaEtapa = () => {
      this.setState({ etapa: this.state.etapa +1})
    }

    renderizarEtapa = () => {
      switch (this.state.etapa) {
        case 1:
          return <Etapa1/>;
        case 2:
            return <Etapa2/>;
        case 3:
            return <Etapa3/>;
        case 4:
            return <Final/>;
        default:
            return <Final/>;
      }
    }

  render () {
    return (
      <FormContainer>
        {this.renderizarEtapa()}

        {this.state.etapa !== 4 && (<button onClick = {this.ProximaEtapa}> Próxima Etapa  </button>) }  
      </FormContainer>
    )
  }
}
export default App;
