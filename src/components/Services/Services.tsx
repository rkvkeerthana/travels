import React from "react";
import "./services.css";
import { FaPlaneDeparture, FaCalendarCheck, FaCar } from "react-icons/fa";

const services = [
  {
    title: "Airport pickup",
    icon: <FaPlaneDeparture className="green-icon" />,
    des: "Pick up from any airport with our reliable service. Timely and comfortable.",
  },
  {
    title: "Easy booking",
    icon: <FaCalendarCheck  className="green-icon"/>,
    des: "Book your trip in just a few clicks. Hassle-free and quick.",
  },
  {
    title: "Car rental",
    icon: <FaCar className="green-icon" />,
    des: "Rent a car for your journey with flexible options. Affordable rates.",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="services">
      <h2>Our services</h2>

      <div className="service-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <span>{s.icon}</span>
            <h4>{s.title}</h4>
            <p>{s.des}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
