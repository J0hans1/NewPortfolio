import './css/textbox.css'

const TextBox = (props) => {
  return (
    <div className="textbox">
        {props.children}
    </div>
  );
}

export default TextBox;