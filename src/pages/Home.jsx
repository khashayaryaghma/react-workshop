import { useEffect } from "react";
import Hero from "../components/Hero";
import "./home.css";
import { useState } from "react";
import Card from "../components/Card";
import Contact from "../components/Contact";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        setData(resData.data);
      });
  }, []);

  if (data.length === 0) {
    return <h1 style={{ marginTop: "9rem", textAlign: "center", height: "66.5vh" }}>Loading...</h1>;
  } else {
    return (
      <main>
        <Hero />
        <div className="container">
          {data?.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
        <Contact />
      </main>
    );
  }
};
