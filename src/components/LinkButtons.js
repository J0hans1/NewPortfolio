import IconButton from "./IconButton";

//link to github.png from here to img folder

const LinkButtons = (props) => {
    return (
        <div id="linkbuttons">
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
        </div>
    );
}

export default LinkButtons;