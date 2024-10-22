import { useEffect, useState } from "react";
import "./home.css";

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

  return (
    <main>
      <div className="container">jjty</div>
    </main>
  );
}

export default Home;
