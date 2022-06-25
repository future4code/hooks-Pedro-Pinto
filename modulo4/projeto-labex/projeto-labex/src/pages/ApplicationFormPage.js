import { useState, useEffect } from "react";
import axios from "axios";
import {goToTravels} from "../navigate/Navigator"
import { useNavigate } from "react-router-dom"


function ApplicationFormPage (){
    const [tripsList, setTripsList] = useState([]);
    const [name,setName] = useState ("")
    const [age,setAge] = useState ("")
    const [applicationText,setApplicationText] = useState ("")
    const [profession,setProfession] = useState ("")
    const [country,setCountry] = useState ("")
    const [id,setId] = useState("")

    const navigate = useNavigate()

    const onChangeName = (event) => {
        setName (event.target.value)
    }

    const onChangeAge = (event) => {
        setAge (event.target.value)
    }

    const onChangeApplicationText = (event) => {
        setApplicationText (event.target.value)
    }

    const onChangeProfession = (event) => {
        setProfession (event.target.value)
    }

    const onChangeCountry = (event) => {
        setCountry (event.target.value)
    }

    const onChangeId = (event) => {
        setId (event.target.value)
    }

        
    useEffect(() => {
     getListTrips();
    }, []);
 
    const getListTrips = () => {
     axios
         .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/pedro-cesar-hooks/trips")
         .then((res)=> {
             setTripsList(res.data.trips);
             // console.log (res.data.trips);
         })
         .catch((err) => {
             console.log("Erro na API da lista de viagens");
         });
     }
 
     const renderTrips = tripsList.map ((trip)=>{
        return <option value={trip.id} key={trip.id}>
            {trip.name}
            </option>
     }) 

     const applyTrip = () => {
       
        const body = {
            name: name,
            age: age,
            applicationText:applicationText,
            profession: profession,
            country: country
        }
        axios
        .post (`https://us-central1-labenu-apis.cloudfunctions.net/labeX/pedro-cesar-hooks/trips/${id}/apply`,body)
        .then ((res)=>{alert("Candidato Inscrito")})
        .catch((err)=>{alert("Erro ao candidatar!")})

     }

    //  console.log (id)

    return (<>
    <select value={id} onChange={onChangeId}  > 
        <option> Selecionar Viagem </option>
        {renderTrips} 
    </select>
    <input placeholder="Nome" value={name} onChange={onChangeName} />
    <input placeholder="Idade" value={age} onChange={onChangeAge} />
    <input placeholder="Texto de Candidatura" value={applicationText} onChange={onChangeApplicationText} />
    <input placeholder="Profissão" value={profession} onChange={onChangeProfession} />
    <input placeholder="País" value={country} onChange={onChangeCountry} />
    <button onClick={()=>goToTravels(navigate)}  > Voltar </button>
    <button onClick={()=>applyTrip()} > Enviar </button>

    </>)
}

export default ApplicationFormPage;






