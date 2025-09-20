import { useState } from "react";
import "./App.css";

//Components
import LandingPage from "./LandingPage/Main/LandingPage.jsx";

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
