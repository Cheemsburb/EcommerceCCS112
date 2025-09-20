import style from "./Header.module.css";
import logo from "./assets/sun.png";
import account from "./assets/user.png";
import search from "./assets/search.png";
import bag from "./assets/bag.png";

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
