import reactLogo from "../assets/react.svg";

import "../styles/Card.css";

const Card = () => {
  return (
    <article className="CardComponent">
      <h1>Card</h1>
      <img src={reactLogo} alt="logo" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
        consequuntur quidem facilis laborum officiis eos temporibus accusantium
        a natus quaerat.
      </p>
    </article>
  );
};

export default Card;
