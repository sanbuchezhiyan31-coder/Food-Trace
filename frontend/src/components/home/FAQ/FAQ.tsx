import "./FAQ.css";

const faqs = [
  {
    question: "How does QR traceability work?",
    answer:
      "Each product receives a unique QR code. Customers can scan it to view its journey from the farm to their hands.",
  },
  {
    question: "Can farmers update product information?",
    answer:
      "Yes. Farmers can update harvest details, quantity, and availability through their dashboard.",
  },
  {
    question: "Is the platform free for customers?",
    answer:
      "Yes. Customers can browse products and track food information at no additional cost.",
  },
  {
    question: "How is food safety monitored?",
    answer:
      "Every batch can be tracked, quality checked, and monitored throughout the supply chain.",
  },
];

function FAQ() {
  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;