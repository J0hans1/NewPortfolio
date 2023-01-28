import NavButton from "./NavButton";
import './css/nav.css'

const Navbar = () => {
    return (
        <div id="navigation" className="glasspane">
            <nav>
                <NavButton text="Home"/>
                <NavButton text="About"/>
                <NavButton text="Education"/>
                <NavButton text="Skillsets"/>
                <NavButton text="Experience"/>  
            </nav>
        </div>
    );
}

export default Navbar;