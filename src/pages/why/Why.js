import React from "react";
import { styles } from "./WhyStyles";
import './why.css'

const WhyUs = () => {


  const features = [
    {
      icon: "🍃", // Replace with actual icon if available
      title: "Quality Products",
      description:
        "Whether you're a solopreneur, startup, or an established enterprise, our flexible office solutions cater to your evolving needs.",
    },
    {
      icon: "💳", // Replace with actual icon if available
      title: "Transparent Pricing",
      description:
        "Choose a plan that suits your budget and business objectives, and experience the value of a premium coworking space without breaking the bank.",
    },
    {
      icon: "🚚", // Replace with actual icon if available
      title: "On Time Delivery",
      description:
        "Whether you prefer the flexibility of a hot desk or the exclusivity of a private office, Cowork offers tailored solutions to suit every working style.",
    },
  ];

  return (
    <div style={styles.container} className="container">
      <h2 style={styles.title} className="title">Why Choose Us?</h2>
      <div style={styles.features} className="features">
        {features.map((feature, index) => (
          <div key={index} style={styles.feature}>
            <div style={styles.icon}>{feature.icon}</div>
            <h3 style={styles.heading}>{feature.title}</h3>
            <p style={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
