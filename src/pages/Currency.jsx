import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Currency() {
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.coincap.io/v2/assets/${params.id}`)
      .then((res) => {
        return res.json();
      })
      .then((currencyData) => {
        setData(currencyData.data);
      });
  }, [params.id]);

  return (
    <>
      {" "}
      <div style={{ marginTop: "10rem" }}>{data.symbol}</div>
    </>
  );
}

export default Currency;
