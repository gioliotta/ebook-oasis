import styled from "styled-components";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a eBook Oasis, una tienda de libros digitales. 📙🙂" />
    </AppContainer>
  );
}

export default App;

// Paleta de colores: #edede9 #d6ccc2 #f5ebe0 #e3d5ca #d5bdaf
