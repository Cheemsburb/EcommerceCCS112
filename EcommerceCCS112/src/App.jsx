import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Components
import LandingPage from "./LandingPage/Main/LandingPage.jsx";

//Routes

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="body">
        <LandingPage />
      </div>

      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
