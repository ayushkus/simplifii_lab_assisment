import "./styles.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    if (location.state === null) {
      console.log("not logged in");
      navigate("/");
    }
  }, []);
  return (
    <div className="App">
      <h1> You got a successful login</h1>
    </div>
  );
}
