import reactLogo from "./assets/react.svg";

function NavBar() {
  return (
    <nav className="nav-bar">
      <img src={reactLogo} alt="" className="react-img" />
      <h3>ReactFacts</h3>
      <h4>React Course - Project 1</h4>
    </nav>
  );
}
export default NavBar;
