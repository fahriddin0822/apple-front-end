import "./Header.scss";
import { LINKS } from "../../static";
import logo from "../../assets/images/logo__header.jpg"
import { IoMenuOutline } from "react-icons/io5";


const Header = () => {
  const linkItems = LINKS.map((item) => (
    <li key={item.id} className="navbar__item">
      <a href={item.link} className="navbar__link">
        <span>{item.name}</span>
      </a>
    </li>
  ))
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <img src={logo} className="navbar__logo"></img>
          <ul className="navbar__collection">
            {linkItems}
          </ul>
          <div className="menu">
            <IoMenuOutline />
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
