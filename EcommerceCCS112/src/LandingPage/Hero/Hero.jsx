import style from "./Hero.module.css";

function Hero() {
  return (
    <div className={style.body}>
      <div className={style.introductionContainer}>
        <p className={style.mainIntro}> Celebrating Filipino Heritage</p>
        <p className={style.subIntro}> HANDMADE | TRADITIONAL | ARTISINAL </p>
        <button className={style.button}> SHOP NOW </button>
      </div>
    </div>
  );
}

export default Hero;
