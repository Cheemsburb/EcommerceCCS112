import style from "./LandingPage.module.css";

// Components
import Header from "../../Header/Header.jsx";
import Hero from "../Hero/Hero.jsx";

function LandingPage() {
  return (
    <div className={style.body}>
      <Header />
      <Hero />
    </div>
  );
}
export default LandingPage;
