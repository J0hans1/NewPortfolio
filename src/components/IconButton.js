//button with image icon
import React from 'react';
import './css/iconButton.css';

const IconButton = (props) => {
    const handleClick = (event) => {
        // Prevent the default action of the button (which is to submit a form)
        event.preventDefault();
        // Open the link in a new tab
        window.open(props.href, "_blank");
      }
    return (
        <button className="iconButton glasspane" onClick={handleClick}>
            {/* <img src={props.icon} alt={props.alt} /> */}
        </button>
    );
}

export default IconButton;