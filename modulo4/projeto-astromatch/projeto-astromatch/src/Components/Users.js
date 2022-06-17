import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import IconeAmor from "./Img/IconeAmor.png"


const ImgCard = styled.img `

   width: 300px;
   flex-direction: column;
   justify-content: center;  // horizontal
   align-items: center; 
   background-color:gold;
   margin:auto;
   

`

const CardImg = styled.div `

   border-radius: 5px;
   box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
   padding: 0px;
   margin: 0px;
   width: 350px;
   transition: all 0.3s ease-out;
   display: flex;
   flex-direction: column;
   background-color:blue
  
`

const CardButtons = styled.div `

   display: flex;
   flex-direction: row;
   justify-content: space-around;  // horizontal
   align-items: center;   //vertical
   background-color:yellow;


`

const BlockInfs = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;  // horizontal
  align-items: center; //vertical
  background-color:pink;
  padding: 0px;
  margin: 0px;


`


const ButtonLove = styled.button`
background-color: transparent;
border: none;
width:1px;
height:1px;

`


const Users = () => {
   const [listaUsuarios, setListaUsuarios] = useState([]);

   useEffect(() => {
     getProfile();
   }, []);
 
   const getProfile = () => {
     axios
       .get(
         "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/pedro-cesar-hooks/person"
       )
       .then((res) => {
        
         setListaUsuarios(res.data.profile);
          /* console.log(res.data); */
       })
       .catch((err) => {
         console.log("erro na api de aparecer na tela");
       });
   };
 
   const getProfileToChoose = () => {
     const body = {
       id: listaUsuarios.id,
       choice: true
     };
     axios
       .post(
         "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/pedro-cesar-hooks/choose-person",
         body
       )
       .then((res) => {
         getProfile();
         // console.log(res.data);
       })
       .catch((err) => {
         console.log("erro na api escolher");
       });
   };

   const getNoProfileToChoose = () => {
      const body = {
        id: listaUsuarios.id,
        choice: false
      };
      axios
        .post(
          "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/pedro-cesar-hooks/choose-person",
          body
        )
        .then((res) => {
          getProfile();
          // console.log(res.data);
        })
        .catch((err) => {
          console.log("erro na api escolher");
        });
    };

   return (
 
     <>

     <CardImg>   
      <ImgCard src={listaUsuarios.photo} alt={"foto do match"} />
      <BlockInfs>
     <h3> {listaUsuarios.name}, {listaUsuarios.age} </h3>
     <p>{listaUsuarios.bio}  </p>
     </BlockInfs>

   <CardButtons>
      <button type ="bu" onClick={()=> getNoProfileToChoose ()} > x </button>
      <ButtonLove onClick={()=> getProfileToChoose ()}> 
      <img src= {IconeAmor} /> 
      </ButtonLove>
   </CardButtons>
      </CardImg>  
     </>

   )
   }
 

export default Users;