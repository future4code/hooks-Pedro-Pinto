import React, {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import {goToAplicationFormPage} from "../navigate/Navigator"
import { useNavigate} from "react-router-dom"
import { goToHome} from "../navigate/Navigator";
 


    const Trips = () => {
        const [tripsList, setTripsList] = useState([]);
        const navigate = useNavigate()

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

     return (
        <> 
            <button onClick={()=>goToHome(navigate)} > Voltar </button>
            <button onClick={()=>goToAplicationFormPage(navigate)} > Inscrever-se </button>
            <h2>Lista de Viagens</h2>

            <div>
            {tripsList.map((viagens)=> {
                return <div>               
                            <div key= {viagens.id}>
                            <p> Nome: {viagens.name}</p>
                            <p> Descrição: {viagens.description} </p>
                            <p> Planeta: {viagens.planet} </p>
                            <p> Duração: {viagens.durationInDays} </p>
                            <p> Data: {viagens.date} </p>
                            </div>
                        </div>        
                        }
                    )
                }
            </div>

        </>  
    
     )
    }

export default Trips