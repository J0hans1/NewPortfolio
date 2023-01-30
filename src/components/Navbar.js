import NavButton from "./NavButton";
import './css/nav.css'

const Navbar = () => {
    return (
        <div id="navigation" className="glasspane sticky">
            <nav>
                <NavButton text="Home" pageId="home"/>
                <NavButton text="About" pageId="about"/>
                <NavButton text="Education" pageId="education"/>
                <NavButton text="Skillsets" pageId="skillsets"/>
                <NavButton text="Experience" pageId="experience"/>  
            </nav>
        </div>
    );
}

export default Navbar;