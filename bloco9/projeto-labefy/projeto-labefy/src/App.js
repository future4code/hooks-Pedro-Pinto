import React from "react";
import CreatePlaylist from "./components/CreatePlaylist";
import ViewPlaylist from "./components/ViewPlaylist";
import "./App.css";

// import styled from "styled-components"



class App extends React.Component {


render()  {
   return (
    <div>
           <ViewPlaylist/>
    </div>
    );
  } 
}

export default App;
