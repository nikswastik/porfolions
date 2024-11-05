import "./App.css";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Landing from "./pages/Landing/Landing";
import Testimonials from "./pages/testimonials/Testimonials";
import WhatWeDo from "./pages/whatwedo/WhatWeDo";
import WhyUs from "./pages/why/Why";

function App() {
  return (
    <div
      style={{
        flex: 1,
        height: "100vh",
        width: "100vw",
      }}
    >
      <Landing />
      <About />
      <WhyUs />
      <WhatWeDo />
      <Testimonials/>
     <Contact/>
    </div>
  );
}

export default App;
