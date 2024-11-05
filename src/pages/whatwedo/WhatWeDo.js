import React from "react";
import { styles } from "./WhatweDoStyle";
import './whatwedo.css'
export default function WhatWeDo() {
  return (
    <div style={styles.container} className="container">
      <div style={styles.l_ctr}>
        <h2 style={styles.title}>
          See what we <br />
          can do for
          <br /> you
        </h2>
      </div>

      <div style={styles.r_ctr}>
      <div style={styles.section}>
        <span>Product Design</span>
      </div>
      <div style={styles.section}>
        <span style={styles.highlightedText}>Ideation & Strategy</span>
      </div>
      <div style={styles.section}>
        <span style={styles.highlightedText}>Web and Mobile</span>
      </div>
      <div style={styles.section}>
        <span>Embedded Systems</span>
      </div>
      </div>
    </div>
  );
}
