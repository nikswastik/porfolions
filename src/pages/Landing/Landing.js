import React from "react";
import { styles } from "./LandingStyles";
import { localAssets } from "../../constants/Constants";

export default function Landing() {
  return (
    <div style={styles.landing_ctr}>
      <div>
        <h2 style={styles.landing_l_ctr}>
          Bridging the Gap
          <br />
          Between Tech and <br /> Seamless Innovation
        </h2>
      </div>
      <div>
        <img src={localAssets.bg_landing} style={styles.landing_banner} />
      </div>
    </div>
  );
}
