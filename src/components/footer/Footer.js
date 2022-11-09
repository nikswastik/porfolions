import React from "react";
import Contact from "../Contact/Contact";
import Socialmedia from "../socialmedia/Socialmedia";
import Button from "@mui/material/Button";
import "./Footer.css";


export default function Footer() {






  return (
    <div>
      <div className="resume-cntr" style={{ display: "flex" }}>
        {/* <h4>Quotes Of The Day ..</h4>
        <h5>{quote}</h5> */}
      </div>
      <div className="footer-cntr">
        <div className="footer-left-cntr">
          <div className="left-sub-cntr">
            <p className="contact-text">
              Trying to Reach me
              {/* I’m available for freelance work, */}
              <br /> you can reach me by
            </p>
          </div>
          <div>
            <Contact />
          </div>
          <div className="submit-btn-cntr">
            <Button variant="contained" className="submit-btn">
              Submit
            </Button>
          </div>
          <div className="left-sub-cntr"></div>
        </div>
        <div className="footer-right-cntr">
          <p className="copy-right-text">
            © 2019 — Design by Swastik Naik — FE
          </p>
        </div>
      </div>
      <div className="social-media-cntr">
        <Socialmedia />
      </div>
    </div>
  );
}
