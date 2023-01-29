//button with image icon
import React from 'react';
import './css/iconButton.css';

const IconButton = (props) => {

    /*
    On click of the button, prevent the default
    action of the button (which is to submit a form),
    and open the link in a new tab.
    */
    const handleClick = (event) => {
        event.preventDefault();
        if (props.href === 'mail') {
            window.location.href = `mailto:markusarj@gmail.com`;
        } else {
            window.open(props.href, "_blank");  
        }
    }

    return (
        <button 
            id={`${props.image}-button`}
            className="iconButton glasspane" 
            onClick={handleClick}
        >
            <img 
                className="ButtonIcon"
                src={require(`../img/${props.image}.png`)}
                alt={props.image}
            />
        </button>
    );
}

export default IconButton;
