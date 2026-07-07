import "./Testimonials.css";

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Farmer",
    review:
      "FarmTrace helped me sell directly to customers without middlemen.",
  },
  {
    name: "Priya Sharma",
    role: "Customer",
    review:
      "I can scan the QR code and know exactly where my vegetables come from.",
  },
  {
    name: "Arun Raj",
    role: "Retailer",
    review:
      "Managing inventory and tracking products has become much easier.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <p>"{item.review}"</p>
            <h3>{item.name}</h3>
            <span>{item.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;