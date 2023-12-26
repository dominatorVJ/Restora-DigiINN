import logo from "/src/assets/logo.png";
import "./Header.css"
 function refreshPage() {
  window.location.reload(false);
}
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={logo}
          onClick={refreshPage}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
