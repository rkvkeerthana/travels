interface Props {
  number: string;
  title: string;
  description: string;
}

const StepCard: React.FC<Props> = ({ number, title, description }) => {
  return (
    <div className="step-card">
      <span className="step-number">{number}</span>
      <h4>{title}</h4>
       <div className="title-underline"></div>
      <p>{description}</p>
    </div>
  );
};

export default StepCard;
