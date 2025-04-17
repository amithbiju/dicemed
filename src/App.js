// eslint-disable-next-line
import logo from "./logo.svg";
import DiceMed from "./Components/DiceMed";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <DiceMed />
    </div>
  );
}

export default App;
