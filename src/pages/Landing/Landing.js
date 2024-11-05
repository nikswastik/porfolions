import React from "react";
import { styles } from "./LandingStyles";
import { localAssets } from "../../constants/Constants";
import "./Landing-animated.css";

export default function Landing() {
  return (
    <div style={styles.landing_ctr} className="landing-ctr">
      {/* Left container for the slogan and button */}
      <div style={styles.landing_l_ctr} className="landing-l-ctr">
        <span style={styles.slogan_text} className="slogan_text">
          Bridging the Gap
          <br className="landing_brake"  />
          <strong style={styles.highlighted_text} className="slogan_text"> Between </strong> Tech and{" "}
          <br className="landing_brake" /> Seamless Innovation
        </span>
        <div
          style={{
            ...styles.start_btn,
            animation: "buttonFadeIn 1s ease-in-out forwards",
          }}
          className="start_btn"
        >
          <strong>Start Innovating Now</strong>
        </div>
      </div>
      {/* Right container for the image */}
      <div style={styles.landing_r_ctr} className="landing-r-ctr">
        <img
          src={localAssets.bg_landing}
          style={{
            ...styles.landing_banner,
            animation: "fadeIn 1s ease-in-out forwards",
          }}
          className="landing-banner"
          alt="Landing Banner"
        />
      </div>
    </div>
  );
}
