import style from "./Header.module.css";
import logo from "../assets/Header/sun.png";
import account from "../assets/Header/user.png";
import search from "../assets/Header/Search.png";
import bag from "../assets/Header/bag.png";

function Header() {
  return (
    <div className={style.body}>
      <img src={logo} alt="Tribal Sun Logo" className={style.logo} />
      <p className={style.storeName}> Perlas Silangan </p>
      <p className={style.shortcuts}>HOME</p>
      <p className={style.shortcuts}>BEST SELLERS</p>
      <p className={style.shortcuts}>CATEGORIES</p>
      <p className={style.shortcuts}>ABOUT US</p>
      <div className={style.spacer}></div>
      <img src={account} alt="User Account" className={style.icons} />
      <img src={bag} alt="Cart" className={style.icons} />
      <img src={search} alt="Search" className={style.icons} />
    </div>
  );
}

export default Header;
