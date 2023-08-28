import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Skill from "./Components/Skills/Skill";
import Project from "./Components/Projects/Project";
import Contact from "./Components/Contact/Contact";
function App(){
    return (
        <div>
            <Navbar/>
            <Header/>
            <About/>
            <Skill/>
           <Project/>
           <Contact/>
        </div>
    );
};
export default App;