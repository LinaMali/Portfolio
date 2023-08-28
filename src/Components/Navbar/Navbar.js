import "./Navbar.css";
import logo from "../../assets/logo.jpg";
export const Navbar = () => {
  return (
    <div>
    
      <img className="logo" src={logo} alt="Navbar"/>
      <nav className="navigation">
    <a href="#About">About</a>
    <a href="#Skills">Skills</a>
    <a href="#Projects">Projects</a> 
    <a href="#Contact">Contact</a>
</nav></div>
  );
};
export default Navbar;