import {useNavigate} from "react-router-dom"
import Router from "../navigate/Router"
import ListTripsPage from "./ListTripsPage"

function HomePage () {
    const navigate = useNavigate()

    const goToTravels = () => {
        navigate("listTripPage")
    }
    const goToAdminPage = () => {
        navigate("adminHomePage")
    }    

    return ( 
        <>
            <button onClick={goToTravels}> Ver viagens </button>
            <button onClick={goToAdminPage}> Área do Admin </button>
        </>

    )
}

export default HomePage;
