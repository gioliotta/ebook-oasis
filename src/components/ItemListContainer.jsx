import styled from "styled-components";

const Greeting = styled.p`
  color: #000;
  font-size: 2rem;
  margin-top: 5rem;
  text-align: center;
`;

function ItemListContainer(props) {
  let greeting = props.greeting;

  return <Greeting>{greeting}</Greeting>;
}

export default ItemListContainer;
