import style from "./Header.module.css";
import logo from "../assets/Header/sun.png";
import account from "../assets/Header/user.png";
import search from "../assets/Header/search.png";
import bag from "../assets/Header/bag.png";

function Header() {
  return (
    <div className={style.body}>
      <div className={style.logoContainer}>
        <img src={logo} alt="Tribal Sun Logo" className={style.logo} />
        <p className={style.storeName}> Perlas Silangan </p>
      </div>
      <div className={style.shortcutContainer}>
        <p className={style.shortcuts}>HOME</p>
        <p className={style.shortcuts}>BEST SELLERS</p>
        <p className={style.shortcuts}>CATEGORIES</p>
        <p className={style.shortcuts}>ABOUT US</p>
      </div>
      <div className={style.iconsContainer}>
        <img src={account} alt="User Account" className={style.icons} />
        <img src={bag} alt="Cart" className={style.icons} />
        <img src={search} alt="Search" className={style.icons} />
      </div>
    </div>
  );
}

export default Header;
