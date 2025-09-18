import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//Components
import LandingPage from "./LandingPage/LandingPage.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="body">
        <LandingPage />
      </div>
    </>
  );
}

export default App;
