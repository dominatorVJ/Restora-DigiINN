import logo from "/src/assets/logo.png";
import "./Header.css";
import { useState } from "react";
function refreshPage() {
  window.location.reload(false);
}
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} onClick={refreshPage} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button
              className="login"
              onClick={() => {
                return btnName === "Logout"
                  ? setbtnName("Login")
                  : setbtnName("Logout");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
