import React from "react";
import { styles } from "./WhatweDoStyle";

export default function WhatWeDo() {
  return (
    <div style={styles.container}>
      <div style={styles.l_ctr}>
        <h2 style={styles.title}>
          See what we <br />
          can do for
          <br /> you
        </h2>
      </div>

      <div style={styles.r_ctr}></div>
    </div>
  );
}
