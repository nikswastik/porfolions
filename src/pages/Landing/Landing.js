import React from "react";
import "./Landing-animated.css"; // Ensure your CSS file is correctly linked
import { styles } from "./LandingStyles";

const statsData = [
  {
    index: 0,
    backgroundColor: styles.cardBlue,
    content: "Clear Structure",
    img: "https://img.freepik.com/premium-vector/vector-flat-illustration-project-manager-vector-illustration_1090500-9393.jpg?ga=GA1.1.680212624.1730130019&semt=ais_siglip",
  },
  {
    index: 1,
    backgroundColor: styles.cardYellow,
    content: "Unique Design",
    img: "https://img.freepik.com/free-vector/graphic-design-geometric-lettering_52683-34590.jpg?ga=GA1.1.680212624.1730130019&semt=ais_siglip",
  },
  {
    index: 2,
    backgroundColor: styles.cardBlack,
    content: "Smart Features",
    img: "https://img.freepik.com/premium-vector/illustrations-vector-web-technologies-virtual-reality-glasses-touch-future-tech_918459-12792.jpg?ga=GA1.1.680212624.1730130019&semt=ais_siglip",
  },
];

const StatsCard = ({ backgroundColor, content, img, index }) => (
  <div
    className="slide-in"
    style={{
      ...styles.card,
      ...backgroundColor,
      animationDelay: `${index * 100}ms`,
    }}
  >
    <img src={img} alt={content} style={styles.stackImg} />
    <div>{content}</div>
  </div>
);

const Landing = () => {
  return (
    <div style={styles.landingContainer} className="landing_cntr">
      <div style={styles.navBar}>NavBar Component</div>

      <div style={styles.contentContainer}>
        <div style={styles.companyInfo}>
          <div style={styles.companyName}>Company Name</div>
          <div style={styles.slogan}>
            <strong>We</strong> Always <br />
            <strong>Aim</strong> for <br />
            <strong>The BEST</strong>
          </div>
        </div>
        <div style={styles.leftContent}>
          <div style={styles.statsContainer}>
            {statsData.map((stat) => (
              <StatsCard
                key={stat.index}
                index={stat.index}
                backgroundColor={stat.backgroundColor}
                content={stat.content}
                img={stat.img}
              />
            ))}
          </div>
          <div style={styles.textMargin}>What we stand for</div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
