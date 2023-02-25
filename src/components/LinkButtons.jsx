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
        } else if (props.href === 'cv') {
            window.location.href = require(`../docs/CV.pdf`);
        } else {
            window.open(props.href, "_blank");  
        }
    }

    return (
        <button 
            id={`${props.image}-button`}
            className="
            flex items-center w-20 h-20 glasspane rounded-full 
            shadow-sm hover:shadow-lg duration-200 justify-center
            hover:scale-110 active:scale-95
            " 
            onClick={handleClick}
        >
            <img 
                className="h-10"
                src={require(`../img/${props.image}.png`)}
                alt={props.image}
            />
        </button>
    );
}

//link to github.png from here to img folder

const LinkButtons = (props) => {
    return (
        <div className="flex justify-evenly">
            <IconButton 
                href="https://github.com/J0hans1/"
                image="Github"
            />
            <IconButton 
                href="https://www.linkedin.com/in/markus-johansen-64625b208/"
                image="LinkedIn"
            />
            <IconButton 
                href="mail"
                image="Mail"
            />
            <IconButton 
                href="cv"
                image="CV"
            />
        </div>
    );
}

export default LinkButtons;