import "./App.css";
import Community from "./pages/Community/Community";
import Landing from "./pages/Landing/Landing";

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
      {/* <Community /> */}
    </div>
  );
}

export default App;
