import React, { useState, useEffect } from "react";
import './css/navButton.css'


const NavButton = (props) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const pageElement = document.getElementById(props.pageId);
        if (pageElement) {
          setActive(window.pageYOffset >= pageElement.offsetTop);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [props.pageId]);


    const handleClick = () => {
        const pageElement = document.getElementById(props.pageId);
        if (pageElement) {
          window.scrollTo({
            top: pageElement.offsetTop,
            behavior: "smooth"
          });
        }
      };

    return (
        <div 
            className="flex flex-col p-8 w-fit navlink-container"
            onClick={handleClick}
        >
            <p className="text-xl font-thin tracking-widest text-glassy-100 duration-200"
                style={{
                    // color: active ? "#e7e7e7" : "#e7e7e7bc"
                    }}
            >
                {props.text}
            </p>
            <div
                className="duration-300 h-0.5 bg-glassy-150 w-0"
                style={{
                    // width: active ? "100%" : "0%"
                    }}
            >
            </div>
        </div>
    );
}

const Navbar = () => {
    return (
        <div className="h-screen w-50 bg-glassy-25 backdrop-blur-md sticky top-0 hidden md:block">
            <nav className="flex flex-col justify-center h-full w-full">
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