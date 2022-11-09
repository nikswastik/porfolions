import React from 'react';
import "./Landing.css"
import Button from '@mui/material/Button';
import Socialmedia from "../../components/socialmedia/Socialmedia";
import AnimatedText from "../../components/AnimatedText/AnimatedText";



export default function Landing() {
  // const [y,
  //   setY] = useState(document.scrollingElement.scrollHeight);
  // const [scrollDirection,
  //   setScrollDirection] = useState("you have not scrolled yet");
  // const scollHandler=(event)=>{
  //   console.log("hey")
  // }

  // const handleNavigation = useCallback((e) => {

  //   if (y > window.scrollY) {
  //     setScrollDirection("Scrolling Up");
  //     console.log("scrolling up");
  //   } else if (y < window.scrollY) {
  //     setScrollDirection("Scrolling Down");
  //     console.log("scrolling down");
  //   }
  //   setY(window.scrollY)
  // }, [y]);

  // useEffect(() => {

  //   window.addEventListener("scroll", handleNavigation);

  //   return () => {
  //     window.removeEventListener("scroll", handleNavigation);
  //   };
  // }, [handleNavigation]);
  
  return (
    <div className="landing-cntr" >
   
      <div className="landing-main-cntr">
        <div className="landing-left-cntr">
          
         <div style={{textAlign:"left",display:"flex",justifyContent:"left"}}>
         <AnimatedText Words={["Bring your","brand to life","with our skills"]} textSize={"15px"}/>
         </div>
          
         {/* <div style={{textAlign:"left",display:"flex",justifyContent:"left"}}>
         <AnimatedText Words={["In your role as a professional web developer, you’re","up for just about","up for just about any website-building challenge."]} textSize={"8px"}/>
         </div> */}
          <p className="landing-pitch-text">
            In your role as a professional web developer, you’re<br/> up for just about
            any website-building challenge.
          </p>

         <div className="contact-btn-cntr">
         <Button variant="contained" className="contact-btn">{"Contact Us />"}</Button>
         </div>
          {/* <button>{"Contact Us />"}</button> */}
        </div>
        <div className="landing-right-cntr">
          {/* <Skills/> */}
          <img className="landing-image" alt="img" src={require("../../assets/images/bar-chart.png")} />
        </div>
      </div>
      <Socialmedia/>
    </div>
  );
}
