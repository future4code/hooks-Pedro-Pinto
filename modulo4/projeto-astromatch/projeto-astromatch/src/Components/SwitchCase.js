import styled from "styled-components";
import MatchList from "./MatchList";
import Users from "./Users";
import React, { useState } from "react";





const AllTheCard = styled.div `
 display: flex;
 flex-direction: column;
 background-color:brown;
 margin:auto;
 position:absolute;
border: 2px solid black;
border-radius: 10px;


`

const Header = styled.div `
display:flex;
align-items: center;
background-color: tomato;
justify-content:space-between;

`

const Titulo = styled.div `
background-color:white
`



export default function SwitchCase() {

      const [currentPage, setCurrentPage] = useState ("Users")
    
     const onClickUsers = () => {
      setCurrentPage ("Users")
     }
    
     const onClickMatchList = () => {
      setCurrentPage ("MatchList")
     }
    

     
     
     
    switch (currentPage) {
      case "Users":
        return <AllTheCard>
          <Header>
          <h3>AstroMatch</h3>
          <button onClick={()=> onClickMatchList() }>Lista de Matchs</button>
          </Header>
          <Users/>
          </AllTheCard>
          break;
      case "MatchList":
        return <AllTheCard>
          <h3>AstroMatch</h3>
          <button onClick={()=> onClickUsers()}>voltar para usuários</button>
          <MatchList/>
          </AllTheCard>
          break;
      
      default: 
        break;
    }
}