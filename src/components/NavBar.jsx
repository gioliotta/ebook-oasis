import styled from "styled-components";
import CartWidget from "./CartWidget";
import book from "../img/book.png";

const Header = styled.header`
  font-family: "Lora", sans-serif;
  background-color: #d5bdaf;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 5rem;

  @media (max-width: 540px) {
    height: auto;
    flex-direction: column;
    row-gap: 2rem;
    padding: 1rem 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  justify-content: center;
  align-items: center;
`;

const Book = styled.img`
  width: 2.8rem;
  height: 2.8rem;
`;

const Title = styled.p`
  font-size: 1.7rem;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  column-gap: 1.5rem;
`;

const Link = styled.a`
  text-transform: uppercase;
  font-style: italic;
  color: #001219;
  font-weight: bold;
  letter-spacing: 1px;
`;

function NavBar() {
  return (
    <Header>
      <Container>
        <Book src={book} />
        <Title>eBook Oasis</Title>
      </Container>

      <nav>
        <List>
          <li>
            <Link href="#">Libros</Link>
          </li>

          <li>
            <Link href="#">Precios</Link>
          </li>
        </List>
      </nav>

      <CartWidget />
    </Header>
  );
}

export default NavBar;
