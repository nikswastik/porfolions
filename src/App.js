import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
       <div>
                <Navbar />
                <Landing />
                <About />
                <Experience />
                <Footer />
              </div>
    </div>
  );
}

export default App;
