import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import "./FarmerTracking.css";

const trackingData = [
  {
    id: "P001",
    product: "Tomato",
    stage: "Harvested",
    location: "Coimbatore Farm",
    date: "06-07-2026",
  },
  {
    id: "P002",
    product: "Potato",
    stage: "Packed",
    location: "Farm Warehouse",
    date: "07-07-2026",
  },
];

function FarmerTracking() {
  return (
    <DashboardLayout>
      <div className="tracking-page">
        <h1>Product Tracking</h1>

        {trackingData.map((item) => (
          <div className="tracking-card" key={item.id}>
            <h2>{item.product}</h2>

            <p>
              <strong>Product ID:</strong> {item.id}
            </p>

            <p>
              <strong>Current Stage:</strong> {item.stage}
            </p>

            <p>
              <strong>Location:</strong> {item.location}
            </p>

            <p>
              <strong>Updated:</strong> {item.date}
            </p>

            <button>View Timeline</button>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

export default FarmerTracking;