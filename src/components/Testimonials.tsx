import React from "react";
import "../css/testimonila.css";

type Testimonial = {
  name: string;
  role: string;
  message: string;
};

const testimonials: Testimonial[] = [
  {
    name: "John Smith",
    role: "Traveler",
    message: "An unforgettable experience. Everything was perfectly organized.",
  },
  {
    name: "Emily Brown",
    role: "Solo Explorer",
    message: "Beautiful destinations and amazing guides!",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials">
      <h2>Our clients share their stories</h2>

      <div className="testimonial-grid">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <p>“{t.message}”</p>
            <h4>{t.name}</h4>
            <span>{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
