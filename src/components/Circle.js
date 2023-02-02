import React, { useState, useEffect } from 'react';

//react component using the circle class. changeable size, color and position
import './css/circle.css'
function Circle(props) {
  // const [scrollTop, setScrollTop] = useState(0);
  // const [scrollLeft, setScrollLeft] = useState(0);
  // const [circleSize, setCircleSize] = useState(100);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const styles = {
  //   position: 'fixed',
  //   top: `${scrollTop}px`,
  //   left: `${scrollLeft}px`,
  //   width: `${circleSize}px`,
  //   height: `${circleSize}px`,
  //   borderRadius: '50%',
  //   backgroundColor: props.color,
  // };

  // const handleScroll = () => {
  //   setScrollTop(window.scrollY + props.top);
  //   setScrollLeft(window.scrollX + props.left);
  //   setCircleSize(props.size + window.scrollY / 100);
  // };

  return (
    <div className="circle sticky"
    style={{
      width: props.size,
      height: props.size,
      background: props.color,
      left: props.left,
      top: props.top,
    }}

    >
    </div>
  );
}

export default Circle;




