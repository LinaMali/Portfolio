import "./Contact.css";
export const Contact = () => {
  return (
    // <a name="Contact">
  <div className="Contact">
<h1>Contact</h1>
<div className="Contact1">
  
    <h2>Contact Me</h2>
    <h4>Please fill this form in a decent manner</h4>
    <form>
   <label for="name">Full Name : </label>&nbsp;&nbsp;&nbsp;
   <input type="text" className="name" name="name"  placeholder="Enter your name..." required/><br/><br/>
   <label for="email">Email ID : </label>&nbsp;&nbsp;&nbsp;
   <input type="email" className="email" name="email" placeholder="Enter your email..."  required/><br/><br/>
   <label for="Messege">Messege : </label>&nbsp;&nbsp;
   <textarea cols="20" rows="5" className="msg"></textarea><br/>
   <input type="submit" className="submit" name="submit" value="Submit"/>
   </form>
</div>
</div>
  );
};
export default Contact;
