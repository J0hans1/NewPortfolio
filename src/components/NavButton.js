import React, { useRef } from "react";
import './css/navButton.css'

const NavButton = (props) => {
    const ref = useRef(null);

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
        <div className="navlink-container" onClick={handleClick}>
            <p>{props.text}</p>
            <div></div>
        </div>
    );
}

export default NavButton;