import React from "react";
import { localAssets } from "../../constants/Constants";
import { styles } from "./AboutStyle";
import "./about.css"
export default function About() {
  return (
    <div style={styles.abt_ctr} className="abt_ctr">
      <div style={styles.abt_l_ctr}  className="abt_l_ctr">
        <img style={styles.abt_img} src={localAssets.bg_about}  alt="info" className="abt_img"/>
      </div>
      <div style={styles.abt_r_ctr}>
        <div style={styles.img_ctr} className="img_ctr">
          <div>
           
          </div>
          <div>
            <img src={localAssets.bg_lined_card} style={styles.lined_crd} className="lined_crd"  alt="info"/>
          </div>
        </div>
        <div>
          <h3 style={styles.abt_title}>About US</h3>
          <p style={styles.abt_desc}>
            Concept Softworks is a software company, we develop custom built
            software for clients - covering everything from financial
            institutions & medical companies all the way to tech companies and
            government organizations.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
