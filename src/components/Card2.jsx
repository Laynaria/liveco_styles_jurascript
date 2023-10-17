import styled from "styled-components";
import reactLogo from "../assets/react.svg";
import P from "../styles/Card2";

const Article = styled.article`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 20rem;
  gap: 0 1rem;
  border-radius: 10px;
  border: 1px solid white;
`;

const Title = styled.h1`
  font-size: 3rem;
  padding: 0.5rem;
`;

const Img = styled.img`
  animation: logo-spin infinite 20s linear;
`;

const Card2 = () => {
  // ton js
  return (
    <Article className="Card2Component">
      <Title>Card 2</Title>
      <Img src={reactLogo} alt="logo" />
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
        consequuntur quidem facilis laborum officiis eos temporibus accusantium
        a natus quaerat.
      </P>
    </Article>
  );
};

export default Card2;
