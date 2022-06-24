import HomePage from "../pages/HomePage"
import Router from "../navigate/Router"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";

    const Trips = () => {
        const [tripsList, setTripsList] = useState([]);
    
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
        <div>
          {tripsList.map((viagens)=> {

        return <div key= {viagens.id}>
                    <p> {viagens.name}</p>
                    <p> {viagens.description} </p>
                    <p> {viagens.planet} </p>
                    <p> {viagens.durationInDays} </p>
                    <p> {viagens.date} </p>
                   
                </div>
        
            }
            )
        }
       </div>

    
     )
    }

export default Trips