import React from "react";
import axios from "axios"
import styled from "styled-components"


class Detalhes extends React.Component {

    state = {
        tracks:[],
    }

    componentDidMount() {
        this.pegarPlaylist ()
    }
    
 pegarPlaylist = () => {

         const {id} =  this.props

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

        const headers = {
            headers: {
                Authorization: "pedro-cesar-hooks"
            }
        }

        axios.get (url,headers)
            .then((resposta)=> {                
                this.setState({tracks: resposta.data.result.tracks})   
            })
            .catch((erro)=>{
                alert ("Algo deu errado")
            })   
    }

render () {
    const {isOpen,name,id} =  this.props
   
return (

    <div className = {isOpen ? "exibir" : "fechado" }  >
        <h1> {name}   </h1>
        {this.state.tracks.map((track) => (
            <p key= {track.id}  > {track.name}</p>
        )   )}
    </div>

    )
}   
}

export default Detalhes;
