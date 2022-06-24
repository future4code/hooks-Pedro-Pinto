import {useNavigate} from "react-router-dom"
import { goToTravels , goToAdminPage  } from "../navigate/Navigator"



function HomePage () {
    const navigate = useNavigate()

    

    return ( 
        <>
            <button onClick={()=> goToTravels(navigate)}> Ver viagens </button>
            <button onClick={()=> goToAdminPage(navigate)}> Área do Admin </button>
        </>

    )
}

export default HomePage;
