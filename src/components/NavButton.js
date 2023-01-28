import './css/navButton.css'

const NavButton = (props) => {
    return (
        <div className="navlink-container">
            <p>{props.text}</p>
            <div></div>
        </div>
    );
}

export default NavButton;