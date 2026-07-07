import "./TrackingTimeline.css";

const timeline = [
  {
    stage: "Harvested",
    location: "Farmer",
    date: "06 Jul 2026",
  },
  {
    stage: "Packed",
    location: "Farm Warehouse",
    date: "07 Jul 2026",
  },
  {
    stage: "Dispatched",
    location: "Distributor",
    date: "08 Jul 2026",
  },
];

function TrackingTimeline() {
  return (
    <div className="timeline">
      <h2>Product Tracking</h2>

      {timeline.map((item, index) => (
        <div className="timeline-item" key={index}>
          <div className="circle"></div>

          <div className="content">
            <h3>{item.stage}</h3>
            <p>{item.location}</p>
            <small>{item.date}</small>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TrackingTimeline;