import UseProtectedPage from "../hooks/UseProtectedPage";
import { useNavigate } from "react-router-dom";
import { goToHome , goToCreateTrip , goToTripDetails, gotToPrivateArea } from "../navigate/Navigator";
import axios from "axios";
import { useEffect, useState } from "react";

const AdminHomePage = () => {  
 
    UseProtectedPage()

    const navigate = useNavigate()

    const [tripsList, setTripsList] = useState([]);
    
    useEffect(() => {
     getListTrips();
    }, [()=>getListTrips()]);
 
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

     const deleteTrip = (id) => {        
        const headers = {
            headers: {auth : localStorage.getItem("token")}
        }
        axios   
        .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/pedro-cesar-hooks/trips/${id}`,headers)
        .then((res)=> {alert("Viagem deletada")} )
        .catch((err)=>{console.log("Erro ao deletar!")})


     }


     const onClickSetTripId = (trip) => {
        localStorage.setItem ("tripId", trip)

        if (localStorage.getItem("tripId").length > 0 ) {
            goToTripDetails(navigate)
        }

     }



const trips = tripsList.map ((trips)=>{
    return <div key={trips.id}> <p onClick={()=>onClickSetTripId(trips.id)} >{trips.name} </p>
            <button onClick={()=>deleteTrip(trips.id)} >  Apagar  </button>
            </div>
})



   return (
        <> 
   
            <div>Painel Administrativo</div>
            <div>
                    <button onClick={()=>goToHome(navigate)} > Voltar </button>
                    <button onClick={()=>goToCreateTrip(navigate)} > Criar Viagem </button>
                    <button> Logout </button>
                    {trips}

                 
            </div>
        </>

   )
}



export default AdminHomePage;