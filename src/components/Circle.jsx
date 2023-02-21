import React, { useState, useEffect } from 'react';


//react component using the circle class. changeable size, color and position
import './css/circle.css'
function Circle(props) {
  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   function handleScroll() {
  //     setScrollY(window.scrollY);
  //   }
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [props.topFactor, props.leftFactor]); // Add the props in the dependency array


  return (
    <div className="circle"
    style={{
      position: 'absolute',
      width: props.size,
      height: props.size,
      background: props.color,
      top : props.top + "px",
      left: props.left + "px",
      // left: `${(scrollY * props.leftFactor)}px` ,
      // top: `${(scrollY * props.topFactor)}px`,
    }}

    >
    </div>
  );
}

export default Circle;




