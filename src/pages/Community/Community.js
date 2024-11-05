import React from "react";
import { styles } from "./CommunityStyle";

export default function Community() {
  return <div style={styles.communityCtr}>
   <div style={styles.communitySubCtr}>
    <div style={styles.leftCtr}>
       <h3> Creative Community <br/> With Common Goals</h3>
       <p style={styles.description}>Welcome to a vibrant and inclusive space where creativity flourishes and collaboration thrives! Our community is built on the foundation of shared passions and common goals, uniting individuals from diverse backgrounds to inspire, innovate, and uplift one another. Here, we celebrate unique perspectives while working together towards meaningful projects and initiatives. Whether you're an artist, writer, designer, or thinker, you’ll find support, encouragement, and a wealth of resources. Join us as we harness the power of collective creativity to make a positive impact in our world!</p>
    </div>
   </div>
  </div>;
}
