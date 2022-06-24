import { useState, useEffect } from "react"
import axios from "axios"

export const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/pedro-cesar-hooks/trips"

const useRequestData = (url) => {
    const [data, setData] = useState ()

    useEffect(()=>{
        axios
        .get(url)
        .then((res)=>{setData(res.data.trips)})
        .cath ((err)=>{console.log(err)})
    },[url])

    return data

}

export default useRequestData;