import React, { useState } from "react";
import MatchList from "./Components/MatchList";
import Users from "./Components/Users";
import styled from "styled-components";
import SwitchCase from "./Components/SwitchCase";


const TheCard = styled.div `
 display: flex;
 align-items: center;
 flex-direction: column;
 background-color:brown;
 margin-top:20px;

`





export default function App() {

  return (
    <TheCard>
      <SwitchCase />
    </TheCard>
  )

}