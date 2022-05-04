import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  

state = { 
  
  posts: [

{
nomeUsuario: "Paulinha",
fotoUsuario:  "XXX",
fotoPost: "XXX"
},

{
  nomeUsuario: "joãozinho",
  fotoUsuario:  "XXX",
  fotoPost: "XXX"


},

{
  nomeUsuario: "mairinha",
  fotoUsuario:  "XXX",
  fotoPost: "XXX"

},

]        

};

render() {

const listaPosts = this.state.posts.map((postes)=> {

  return (
<p>
  {postes.nomeUsuario}
  {postes.fotoUsuario}
  {postes.fotoPost}
</p>
);

});



return (
  <div>
    <div> {listaPosts}  </div> 
  </div>
);
}
}

export default App;




// render() {


//     return (
//       <MainContainer>
//         <Post
//           nomeUsuario={'paulinha'}
//           fotoUsuario={'https://picsum.photos/50/50'}
//           fotoPost={'https://picsum.photos/200/150'}
//         />
//          <Post
//           nomeUsuario={'joãozinho'}
//           fotoUsuario={'https://picsum.photos/50/50'}
//           fotoPost={'https://picsum.photos/200/151'}
//         />

//          <Post
//           nomeUsuario={'mairinha'}
//           fotoUsuario={'https://picsum.photos/50/50'}
//           fotoPost={'https://picsum.photos/200/152'}
//         />


//       </MainContainer>
//     );
//   }
// }

// export default App;

