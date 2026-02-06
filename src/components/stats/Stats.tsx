import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./stats.css";

type StatItem = {
  value: string;
  label: string;
};

const stats: StatItem[] = [
  { value: "3279 +", label: "Travel with family or alone" },
  { value: "82 +", label: "Top destinations worldwide" },
  { value: "10 +", label: "Experienced travel guide" },
  { value: "5 +", label: "Car Rental Service" },
];

const Stats: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // trigger when 30% visible
  });

  return (
    <section className="stats" ref={ref}>
      {stats.map((item, index) => (
        <div key={index}>
          <h2>
            {inView ? (
              <CountUp
                start={0}
                end={parseInt(item.value)}
                duration={2.5}
                separator=","
              />
            ) : (
              0
            )}
            {item.value.includes("+") && "+"}
            {item.value.includes(" years") && " years"}
          </h2>
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
