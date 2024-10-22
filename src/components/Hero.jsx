import "./hero.css"
function Hero() {
  return (
    <section>
      <div className="fBox">
        <h1 style={{ fontWeight: 600, fontSize: "2.5rem" }}>
          Crypto <span style={{ color: "#4c2c59", fontWeight: 700 }}>Currency</span>
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, laborum perferendis nobis illum officiis repellendus quod vitae ipsa. Cupiditate
          recusandae ea sunt earum molestiae eligendi?
        </p>
        <button>Go to Market</button>
      </div>
      <div className="sBox">
        <img src="https://business.fiu.edu/magazine/spring-2022/img/cryptocurrency.jpg" className="image" alt="img" />
      </div>
    </section>
  );
}

export default Hero;
