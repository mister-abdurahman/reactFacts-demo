import reactLogo from "./assets/react.svg";

function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <img src={reactLogo} alt="" className="reactImg" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
