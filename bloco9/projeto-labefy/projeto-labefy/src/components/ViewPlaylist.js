import React from "react";
import axios from "axios"
import styled from "styled-components"
import Detalhes from "./Detalhes";

const CardPlaylist = styled.div `

    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    display: flex;
    justify-content: space-between;

`

class ViewPlaylist extends React.Component {
    state = {
        playlists: [],
        isOpen: false,
    }

    componentDidMount() {
        this.pegarPlaylists ()
    }


    pegarPlaylists = () => {

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        const headers = {
            headers: {
                Authorization: "pedro-cesar-hooks"
            }
        }

        axios.get (url,headers)
            .then((resposta)=> {
                
                this.setState({playlists: resposta.data.result.list})
                // console.log (this.state.playlists) 
                
                // porque aqui se usa o this.state?
            })
            .catch((erro)=>{
                alert ("Algo deu errado")
            })   

        }

    deletarPlayList = (id) => {

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        const headers = {
                headers: {
                    Authorization: "pedro-cesar-hooks"
                }
            }

        axios.delete (url, headers)
        .then((resposta) => {
                console.log(resposta.data)
                this.pegarPlaylists()  
                // porque é assim?
            })
        .catch((erro) => {
                console.log (erro.response)
                //este response vem de onde?

            })

        }


        exibirDetalhes = () => {
            this.setState ((prevState) => ({isOpen:!prevState.isOpen}))
        } 




    render () {
        // porque o map é antes do return?

        const playlists = this.state.playlists.map((playlist) => {
            return (
                <CardPlaylist key={playlist.id}>
                    {playlist.name}
                    <button  onClick={()=> this.deletarPlayList (playlist.id) } > X </button>
                            {/* // não entendi essa parte onClick={()=> this.deletarPlayList (playlist.id) */}

                    <button  onClick={()=> this.exibirDetalhes () }   > Ver detalhes </button>
                    <Detalhes isOpen = {this.state.isOpen}   name = {playlist.name}  id={playlist.id}   />


                   


                </CardPlaylist>

            )
        })



        return (

            <div>
            {playlists}
            </div>
        )
    }
}


export default ViewPlaylist;