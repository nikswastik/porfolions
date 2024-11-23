import React from "react";
import { localAssets } from "../../constants/Constants";
import { styles } from "./AboutStyle";
import "./about.css"; // Assuming you have your global styles for About component

export default function About() {
  return (
    <div style={styles.abt_ctr} className="abt_ctr">
      <div style={styles.abt_l_ctr} className="abt_l_ctr">
        <img
          style={styles.abt_img}
          src={localAssets.bg_about}
          alt="About Us"
          className="abt_img"
        />
      </div>

      <div style={styles.abt_r_ctr} className="abt_r_ctr">
        <div style={styles.img_ctr} className="img_ctr">
          <div></div>
          <div>
            <img
              src={localAssets.bg_lined_card}
              style={styles.lined_crd}
              className="lined_crd"
              alt="About Us"
            />
          </div>
        </div>

        <div className="abt_text">
          <h3 style={styles.abt_title} className="abt_title">
            About Us
          </h3>
          <p style={styles.abt_desc} className="abt_desc">
            At Omnira Realm, we are a team of professionals with expertise in
            app development, web development, and backend engineering. We
            specialize in delivering high-quality, scalable digital solutions
            that drive business growth. Our client-first approach ensures that
            each project is tailored to your needs, and our commitment to
            transparency and collaboration has earned us the trust of clients
            across various industries.
            <br />
            <br />
            We don’t just build products – we build lasting relationships. With
            a focus on quality, security, and performance, we help businesses
            navigate the complexities of modern technology to achieve success.
            Partner with us, and let’s create something extraordinary together.
          </p>
        </div>
      </div>
    </div>
  );
}
