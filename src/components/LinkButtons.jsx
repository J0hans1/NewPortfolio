//button with image icon
import React from 'react';

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
            className="
            flex items-center w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20
          bg-glassy-25 backdrop-blur-sm rounded-full 
            shadow-sm hover:shadow-lg duration-200 justify-center
            hover:scale-110 active:scale-95 hover:bg- 
            " 
            onClick={handleClick}
        >
            <img 
                className="h-6 md:h-8 lg:h-10"
                src={require(`../img/${props.image}.png`)}
                alt={props.image}
            />
        </button>
    );
}

//link to github.png from here to img folder

const LinkButtons = () => {
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