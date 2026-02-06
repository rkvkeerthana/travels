import React from "react";
import "./TrustSection.css";

const trustData = [
  {
    id: "01",
    title: "Trusted Experience",
    desc: "With years of experience in organizing tours, we provide reliable and memorable travel experiences.",
  },
  {
    id: "02",
    title: "Best Price Guarantees",
    desc: "Enjoy competitive pricing with no hidden charges and the best value for your travel budget.",
  },
  {
    id: "03",
    title: "Customer Satisfaction",
    desc: "Our priority is your happiness. We ensure smooth journeys and complete satisfaction.",
  },
];

const TrustSection: React.FC = () => {
  return (
    <section className="trust">
      <h2>Why Travelers Trust Us</h2>
      <p className="subtitle">
        We focus on delivering quality services and unforgettable travel
        experiences
      </p>

      <div className="trust-grid">
        {trustData.map((item) => (
          <div key={item.id} className="trust-card">
            <span className="number">{item.id}</span>
            <h3>{item.title}</h3>
             <div className="title-underline"></div>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustSection;
