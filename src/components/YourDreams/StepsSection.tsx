import StepsGrid from "./StepsGrid";
import "./steps.css";

const StepsSection: React.FC = () => {
  return (
    <section className="steps-section">
      <div className="steps-wrapper">
        <div className="steps-left">
          <h2>Your Dream Trip In 4 Simple Steps</h2>
          <p>
            We help you plan the perfect journey with simple steps — from
            choosing destinations to enjoying unforgettable moments.
          </p>
        </div>

        <StepsGrid />
      </div>
    </section>
  );
};

export default StepsSection;
