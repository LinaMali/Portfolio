import React from 'react'
import "./Header.css";
import image from "../../assets/image.jpg";
export const Header = () => {
  return (
    <div className="home">
      <img src={image} alt='Header'/>
    <h2>I'm</h2>
    <h1>LINA MALI</h1>
    <h1>Web Developer</h1>
        </div>
  );
};
 export default Header;