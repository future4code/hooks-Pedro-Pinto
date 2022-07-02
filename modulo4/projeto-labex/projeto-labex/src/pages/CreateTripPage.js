import UseProtectedPage from "../hooks/UseProtectedPage";
import {useState} from "react"
import axios from "axios";


function CreateTripPage () {
    const [name,setName] = useState ("")
    const [planeta,setPlaneta] = useState ("")
    const [date,setDate] = useState ("")
    const [description, setDescription] = useState ("")
    const [time, setTime] = useState ("")
    
    const onChangeName = (event) => {
        setName (event.target.value)
    }

    const onChangePlaneta = (event) => {
        setPlaneta (event.target.value)
    }

    const onChangedate = (event) => {
        setDate (event.target.value)
    }
    const onChangeDescription = (event) => {
        setDescription (event.target.value)
    }

    const onChangeTime = (event) => {
        setTime (event.target.value)
    }

    UseProtectedPage()

    const createTrip = () => {
        const headers = {
            headers: {auth : localStorage.getItem("token")}
        }
        const body = {
            name: name,
            planet: planeta,
            date: date,
            description: description,
            durationInDays: time,
        }

        axios 
        .post ("https://us-central1-labenu-apis.cloudfunctions.net/labeX/pedro-cesar-hooks/trips", body, headers)
        .then((res)=>{alert("Viagem criada")})
        .catch((err)=>{console.log("Erro ao criar!")})

    } 

return <>

<input placeholder="Nome" value={name} onChange={onChangeName} />
<input placeholder="Planeta" value={planeta} onChange={onChangePlaneta}  />
<input type="date" placeholder="data" value={date} onChange={onChangedate}  />
<input placeholder="Descrição" value={description} onChange={onChangeDescription}  />
<input placeholder="Duração em dias" value={time} onChange={onChangeTime} />
<button onClick={()=>createTrip()} > Criar viagem </button>

</>

}
export default CreateTripPage;