import React from 'react'
import "./Socialmedia.css"
export default function Socialmedia() {


  const navigateToSocialMedia = (type) => {
    if (type === "LinkedIn") {
      // alert("linkedIn")
      // window.location.replace("https://www.linkedin.com/in/swastik-naik-103239241/")
      window.open('https://www.linkedin.com/in/swastik-naik-103239241/', '_blank');
    }
    else if (type === "Github") {
      // alert("Github")
      window.open('https://github.com/nikswastik', '_blank');
    }
    // else if(type==="Twitter"){

    // }
    else {
      // alert("reload")
      window.location.reload()
    }

  }
  return (
    <div className="landing-social-media">
      <span className="social-media-links" onClick={() => { navigateToSocialMedia("Github") }}>Github</span>
      <span className="social-media-links" onClick={() => { navigateToSocialMedia("LinkedIn") }}>LinkedIn</span>
      {/* <span className="social-media-links">Instagram</span> */}
      <span className="social-media-links" onClick={() => { navigateToSocialMedia("Twitter") }}>Twitter</span>
      {/* <span className="social-media-links">My Portfolio</span> */}
    </div>
  )
}
