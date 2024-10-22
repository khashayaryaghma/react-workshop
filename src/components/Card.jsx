import "./card.css";

function Card({ item }) {
  return (
    <article>
      <span className="rank">{item.rank}</span>
      <h4>
        <span className="symbol">{item.symbol}</span> | <span>{item.name}</span>
      </h4>
    </article>
  );
}

export default Card;
