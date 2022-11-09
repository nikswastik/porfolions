import React, {useEffect, useState, useCallback} from 'react';
import ActionAreaCard from "../../components/Card/ActionAreaCard";
import "./Experience.css";
export default function Experience() {
  let projects=[
    {
      name: "DentaMitra",
      image:
        "https://res.cloudinary.com/dgyveknrl/image/upload/v1667813755/samples/dm1_xsmhe9.png",
        description:"Tips on dental health, Reminders, SMS on daily dental hygiene routine check teeth movements, calculate sweet score, see nearby dentists through Google map and booking appointment with dentist",
        myWorks:["Worked mainly on ui","Api integration",],
        stack:["Ionic","React","Node Js","Material Ui"]
    },
    {
      name: "Blue Ocean",
      image:
        "https://res.cloudinary.com/dgyveknrl/image/upload/v1667813903/samples/Screenshot_2022-11-06_at_7.05.26_PM_uwxmei.png",
        description:"Blue ocean is one of the largest suppliers of Lab equipments, Glassware and Plasticware throughout India.",
        myWorks:["Worked mainly on ui","Api integration","Implemented Search Engine Feature","Product Listing"],
        stack:["Next js","React","Node Js","Antd"]

    },
    {
      name: "Security Centric",
      image:
        "https://res.cloudinary.com/dgyveknrl/image/upload/v1667814597/portpolio/test_hnv88y.png",
        description:"Security Centric is an LMS where a user can subscribe to multiple courses and he can access a live VM via browser",
        myWorks:["Api integration","Implemented Search Engine Feature","developed a module for generating labguides","Contributed on backend Side","Integration of rendering a live vm on browser"],
        stack:["React js","React","Flask","Antd"]
    },
    {
      name: "Beepeppy",
      image:
        "https://res.cloudinary.com/dgyveknrl/image/upload/v1667814818/portpolio/Screenshot_2022-11-07_at_3.23.11_PM_rm1sn0.png",
        description:"Beepeppy is a community application for designers similar to instagram  ",
        myWorks:["Api integration","Chat integration with thrid party sdk","Converting designs into ui"],
        stack:["React Native"]
    },
    {
      name: "BookStore App",
      image:
        "https://img.freepik.com/free-vector/focused-tiny-people-reading-books_74855-5836.jpg?w=2000&t=st=1667814888~exp=1667815488~hmac=e9020ef19e2decb171ba9a925df93772dafba2a7f9708960f909e129b912bd7f",
        description:"BS is an e-commerce app where it has huge collections of books  ",
        myWorks:["Worked mainly on ui","Api integration",],
        stack:["React Native","Node Js","React Native Paper"]
    },
    {
      name: "LocationApp",
      image:
        "https://img.freepik.com/free-vector/directions-concept-illustration_114360-1741.jpg?w=1480&t=st=1667814928~exp=1667815528~hmac=849cf8ef0fbefb35682d9d0d045cb4578f883d6b5544d07cef7f24aed70382e7",
        description:"Location app is to track the location history of a user where he can learn the places he visited throughout his day",
        myWorks:["Worked mainly on ui","Api integration",],
        stack:["React Native","Node Js","React Native Paper"]
    },
  ];
  const [y,
    setY] = useState(document.scrollingElement.scrollHeight);
  const [scrollDirection,
    setScrollDirection] = useState("you have not scrolled yet");

  const handleNavigation = useCallback((e) => {

    if (y > window.scrollY) {
      setScrollDirection("Scrolling Up");
      console.log("scrolling up");
    } else if (y < window.scrollY) {
      setScrollDirection("Scrolling Down");
      console.log("scrolling down");
    }
    setY(window.scrollY)
  }, [y]);

  useEffect(() => {

    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);
  return (
    <div>
     {scrollDirection}
      <div>
        <h1 className="prj-text">Some Things I’ve Worked On</h1>
      </div>
      <div className="prj-cntr">
        {projects.map((prj, index) => {
          return (
            <div>
              {/* <p className='prj-name'>{prj.name}</p> */}
              <ActionAreaCard name={prj.name} img={prj.image} description={prj.description}  works={prj.myWorks} stack={prj.stack}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}
