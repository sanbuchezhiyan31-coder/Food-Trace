import "./CTA.css";

function CTA() {
  return (
    <section className="cta">
      <div className="cta-content">
        <h2>Join FarmTrace Today</h2>

        <p>
          Connect farmers, distributors, retailers, and customers through a
          transparent and trusted food supply chain.
        </p>

        <div className="cta-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Contact Us</button>
        </div>
      </div>
    </section>
  );
}

export default CTA;