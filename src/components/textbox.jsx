import './css/textbox.css'

const TextBox = (props) => {
  return (
    <div className="textbox">
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}

export default TextBox;