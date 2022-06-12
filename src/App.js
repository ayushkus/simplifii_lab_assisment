import "./styles.css";
import Otp from "./Otp";
import Verification from "./verify";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Otp />} />
          <Route path="/verify" element={<Verification />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
  }
