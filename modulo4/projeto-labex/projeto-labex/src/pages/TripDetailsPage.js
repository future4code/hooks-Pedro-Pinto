import React, {useEffect} from "react"
import axios from "axios"

function TripDetailsPage () {

   
    useEffect (()=>{
        const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/pedro-cesar-hooks/trip/7QNnQjgC0iTqyIv7MWDm";
        const headers = {
            headers: {
                auth: localStorage.getItem("token")
            }
        };

        axios
        .get(URL,headers)
        .then((res)=>{
            console.log(res.data.trip);
        })
        .catch((err)=>{
            console.log(err.response);
        })

    },[]);


    return( 
    <>    

    <div>"Página de Detalhes" </div>
    
    {/* <div>
        {detailsTripList.map((details)=> {
        return <P> {details.trip} </P>
        }
        )

    </div> */}

    </>
   

    )
}

export default TripDetailsPage;