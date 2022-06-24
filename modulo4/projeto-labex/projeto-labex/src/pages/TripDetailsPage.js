import React, {useEffect, useState} from "react"
import axios from "axios"
import UseProtectedPage from "../hooks/UseProtectedPage";

function TripDetailsPage () {

    useEffect(()=>{
        getTripDetails();
    },[()=>getTripDetails()])
    

    UseProtectedPage();
   
    const [trip,setTrip] = useState ([])
    const [canditadesPendentes,setCandidatesPendentes] = useState([])
    const [candidatesAprov, setCandidatesAprov] = useState([])


    const getTripDetails = () => {
        const headers = {
            headers: {auth: localStorage.getItem("token")}
        }

    axios 
    .get (`https://us-central1-labenu-apis.cloudfunctions.net/labeX/pedro-cesar-hooks/trip/${localStorage.getItem("tripId")}`,headers)
    .then((res)=> {
    setTrip(res.data.trip)
    setCandidatesPendentes(res.data.trip.candidates)
    setCandidatesAprov(res.data.trip.approved)

    })
    .catch((err)=>{console.log("Erros nos detalhes!")})
    }

    const decideCandidates = (approve, id) => {
        const headers = {
            headers: {auth: localStorage.getItem("token")}
        }

        const body = {
            approve: approve
        }

        axios
        .put (`https://us-central1-labenu-apis.cloudfunctions.net/labeX/pedro-cesar-hooks/trips/${localStorage.getItem ("tripId")}/candidates/${id}/decide`,body,headers)
        .then((res)=>{alert("deu certo!")})
        .catch((err)=>{console.log(err.data)})
    }



    const renderCandidates = canditadesPendentes.map((candidates)=>{
        return <div key={candidates.id}>
            {candidates.name}
            <button onClick={()=> decideCandidates(true,candidates.id)} > Aprovar</button>
            <button onClick={()=> decideCandidates(false,candidates.id)}  > Reprovar </button>
            </div> 
    })


    const renderCandidatesAprov = candidatesAprov.map((candidates)=>{
        return <div key={candidates.id}>
            {candidates.name}</div> 
    })


    return( 
    <>    

    <p>Nome: {trip.name}</p>
    <p> Descrição: {trip.description}</p>
    <p>{trip.durationInDays}</p>
    <p>{trip.planet}</p>
    <p>{trip.date}</p>

     <h1>Candidados Pendentes</h1>
     {renderCandidates}  

     <h1>Candidados Aprovados</h1>
     {renderCandidatesAprov}  
       
    </>
   

    )
}

export default TripDetailsPage;