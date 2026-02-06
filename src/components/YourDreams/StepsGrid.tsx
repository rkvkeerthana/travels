import StepCard from "./StepCard";

const steps = [
  {
    number: "01",
    title: "Choose Your Destination",
    description:
      "Browse through our curated destinations and select the place that inspires you most.",
  },
  {
    number: "02",
    title: "Book Your Trip",
    description:
      "Complete your booking with flexible options and secure payment methods.",
  },
  {
    number: "03",
    title: "Get Ready For Adventure",
    description:
      "Prepare for your journey with our expert guidance and travel tips.",
  },
  {
    number: "04",
    title: "Enjoy Your Experience",
    description:
      "Relax and enjoy your trip while we take care of all the details.",
  },
];

const StepsGrid: React.FC = () => {
  return (
    <div className="steps-grid">
      {steps.map((step) => (
        <StepCard key={step.number} {...step} />
      ))}
    </div>
  );
};

export default StepsGrid;
