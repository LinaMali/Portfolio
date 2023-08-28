import "./About.css";
import image from "../../assets/image.jpg";
export const About = () => {
  return (
     //<div> <a name="About">
    <div className="about">
<h1 className="about2">About Me</h1>
<div className="about1">
<img src={image} alt='About'/>
<h2>I Am &nbsp; Web Developer &nbsp; | Programmer</h2>
<p>I am Lina Mali. I am from Maharastra. I have completed my BCA from Institute of Management Research and Development College.
I am good learner, self-motivated and hardworking. Now come to my technical skills: I'm quite good in C, C++, HTML, JavaScript and PHP. </p>
<p><b>Name :</b> Mali Lina Bhagwan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<b>Experience :</b> Fresher</p>
<p><b>Degree:</b> Bachelor &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Phone :</b> +91 6833852349</p>
<p><b>Address :</b> 123 Street, Maharastra, India</p>
</div>
</div>
  );
};
export default About;