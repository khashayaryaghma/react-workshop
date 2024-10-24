import { useEffect, useState } from "react";
import "./home.css";
import Card from "../components/Card";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
      .then((res) => {
        return res.json();
      })
      .then((currencyData) => {
        setData(currencyData.data);
      });
  }, []);
  if (data.length === 0) {
    return <h1 style={{ marginTop: "9rem", textAlign: "center", height: "66.5vh" }}>Loading...</h1>;
  } else {
    return (
      <main>
        <Hero />
        <div className="container">
          {data.map((item, i) => (
            <Link key={i} to={`/currency/${item.id}`} style={{ textDecoration: "none" }}>
              <Card item={item} />
            </Link>
          ))}
        </div>
      </main>
    );
  }
}

export default Home;
