import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./card.css";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

function Card({ item }) {
  return (
    <article>
      <div className="box1">
        <span className="rank">{item.rank}</span>
        <h4>
          <span className="symbol">{item.symbol}</span> | <span>{item.name}</span>
        </h4>
        <h4>${parseFloat(item.priceUsd).toFixed(2)}</h4>
      </div>
      <div className="box2">
        <FontAwesomeIcon icon={faArrowCircleRight} size="2xl" />
      </div>
    </article>
  );
}

export default Card;
