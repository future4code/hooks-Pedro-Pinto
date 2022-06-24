import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

function UseProtectedPage () {
    const navigate = useNavigate()

    useEffect (()=>{
        const token = localStorage.getItem("token");

        if (token === null ) {
            navigate("/");
        }
    },[navigate]); 
}

export default UseProtectedPage;