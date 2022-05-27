import React from "react";
import axios from "axios"

class CreatePlaylist extends React.Component {
    state = {
        playlist: "",
    }

 createPlaylist = (event) => {
    this.setState({playlist:event.target.value})
 }

cadastrarPlaylist = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    const bady = {
        name: this.state.playlist,
    }

    const headers = {
        headers: {
            Authorization: "pedro-cesar-hooks"
        }
    }

    axios.post (url, bady, headers)
    .then ((resposta) => {
       alert ("Playlist cadastrada com sucesso!")
       this.setState({playlist: ""})
    })
    .catch ((erro) => {
        alert(erro.response.data.message)
        this.setState({playlist: ""})

    })

}


    render()  {
       return (
        <div>
          <input placeholder="Nome Playlist..."
          value={this.state.playlist}
          onChange = {this.createPlaylist}
          />
          <button onClick= {this.cadastrarPlaylist} > Cadastrar </button>
        </div>
        );
      } 
    }
    
    export default CreatePlaylist;