import React from "react";
import "../css/package.css";

type PackageFeature = string;

const features: PackageFeature[] = [
  "Flexible plan",
  "Best destinations",
  "Expert local guide",
];

const Packages: React.FC = () => {
  return (
    <section className="packages">
      <div className="package-card" style={{background:"#fff"}}>
        <h2>Unique travel packages </h2>
         <p className="small-text-para">Unique vacation packages focus on tailored, experience-driven itineraries rather than standard tours. Examples include immersive cultural immersions, high-end experiences, adventure trips , and romantic, customized getaways.</p>
         
        <ul className="feature-list">
  {features.map((feature, index) => (
    <li key={index}>
      <span className="check-icon">✓</span>
      {feature}
    </li>
  ))}
</ul>

      </div>

      <div className="package-image" />
    </section>
  );
};

export default Packages;
