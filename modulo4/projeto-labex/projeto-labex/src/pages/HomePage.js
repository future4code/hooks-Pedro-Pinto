import {useNavigate} from "react-router-dom"
import { goToTravels , goToAdminPage , gotToPrivateArea } from "../navigate/Navigator"




function HomePage () {
    const navigate = useNavigate()

        
    return ( 
        <>
            <button onClick={()=> goToTravels(navigate)}> Ver viagens </button>
            <button onClick={()=> gotToPrivateArea(navigate)}> Área do Admin </button>
        </>

    )
}

export default HomePage;
