import "./App.css";
import About from "./pages/about/About";
import Community from "./pages/Community/Community";
import Landing from "./pages/Landing/Landing";
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
      <About/>
      <WhyUs/>
      {/* <Community /> */}
    </div>
  );
}

export default App;
