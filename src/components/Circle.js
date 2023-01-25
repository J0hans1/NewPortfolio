//react component using the circle class. changeable size, color and position
function Circle(props) {
  return (
    <div className="circle" style={{width: props.size, height: props.size, backgroundColor: props.color, left: props.x, top: props.y}}></div>
  );
}

export default Circle;
