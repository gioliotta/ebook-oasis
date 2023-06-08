import styled from "styled-components";
import cart from "../img/cart.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;
  outline: 2px solid #000;
  border-radius: 0.5rem;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  background-color: #e3d5ca;
`;

const Cart = styled.img`
  width: 3rem;
  height: 3rem;
`;

const NumberProducts = styled.span`
  color: #000;
  margin-top: 0px;
  font-size: 1.3rem;
  padding: 0.5rem;
  font-family: "Arial", sans-serif;
`;

function CartWidget() {
  return (
    <Container>
      <Cart src={cart} />
      <NumberProducts>4</NumberProducts>
    </Container>
  );
}

export default CartWidget;
