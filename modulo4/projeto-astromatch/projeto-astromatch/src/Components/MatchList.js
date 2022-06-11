import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";



const MatchList = () => {

    const [listaMatchs, setListaMatchs] = useState([])

    const getMatches = () =>{

        axios
        .get ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/pedro-cesar-hooks/matches")
        .then ((res) => {
            setListaMatchs(res.data.matches);
        })
        .catch((err) => {
            console.log ("erro lista de matches")
        } );
    }

useEffect(()=> {
    getMatches();  
},[getMatches()])


const deleteMatchs = () => {
axios
.put ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/pedro-cesar-hooks/clear")

.then (() => {alert("Matchs deletados")
})
.catch((err)  => {
console.log("erro apagar");
}

)

};



const mapLista = listaMatchs.map ((match) => {
    return <div key = {match.id} >
            <img  src= {match.photo}     />
            <p>{match.name}</p>
    </div>
} )

return(
<>
{mapLista}
<button onClick={()=> deleteMatchs ()   }  >  x  </button>

</>

)

}

export default MatchList;

