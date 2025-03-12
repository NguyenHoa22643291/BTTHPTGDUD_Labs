import { useState } from "react";
import ava from "/avatar.png";
import logo from "/bai1_logo.png";
import "../components/main.css";

function Header() {
  const [menuItems, setMenuItems] = useState([]);

  return (
    <div className="container-flex">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <input type="text" placeholder="Tìm kiếm" className="search_bar" />
        <ul className="menu_ngang">
          {menuItems.length > 0 ? (
            menuItems.map((item, index) => (
              <li key={index}>
                <a href="#">{item.name}</a>
              </li>
            ))
          ) : (
            <>
              <li>
                <a href="#">What to cook</a>
              </li>
              <li>
                <a href="#">Recipes</a>
              </li>
              <li>
                <a href="#">Ingredients</a>
              </li>
              <li>
                <a href="#">Occasions</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
            </>
          )}
        </ul>
        <button className="box-re">Your Recipe Box</button>
        <img src={ava} alt="Avatar" width="60px" height="50px" />
      </header>
    </div>
  );
}

export default Header;
