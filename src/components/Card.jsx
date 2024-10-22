import "./card.css";

function Card({ item }) {
  return (
    <article>
      <h3>
        <span>{item.symbol}</span> | <span>{item.name}</span>
      </h3>
    </article>
  );
}

export default Card;
