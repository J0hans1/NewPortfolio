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
            className="navlink-container"
            onClick={handleClick}
        >
            <p
                style={{
                    // color: active ? "#e7e7e7" : "#e7e7e7bc"
                    }}
            >
                {props.text}
            </p>
            <div
                style={{
                    // width: active ? "100%" : "0%"
                    }}
            >
            </div>
        </div>
    );
}

export default NavButton;