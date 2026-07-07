import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="overlay">

        <h1>
          Food Supply Traceability &
          <br />
          Safety Monitoring Platform
        </h1>

        <p>
          Connecting Farmers, Distributors,
          Retailers and Consumers
          through transparency and trust.
        </p>

        <div className="hero-buttons">
          <button className="primary">
            Explore Products
          </button>

          <button className="secondary">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;