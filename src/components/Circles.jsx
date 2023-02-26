
// import React, { useState, useEffect } from 'react';


//react component using the circle class. changeable size, color and position
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
    <div className={`${props.breakpoint} rounded-full `}
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


const Circles = () => {
    return (
        <div id="circles" className=" sticky top-0 h-full w-full "> {/* sticky is a class that makes the div stay in place when scrolling */}
            <Circle
                size="180px"
                color="linear-gradient(25.74deg, #38C771 8.85%, #6A56E3 85.16%)"
                left="1513"
                top="131"
                // topFactor="0.01"
                // leftFactor="-0.03"
                breakpoint="hidden 3xl:flex "
            />
            <Circle
                size="180px"
                color="linear-gradient(25.74deg, #38C771 8.85%, #6A56E3 85.16%)"
                left="713"
                top="131"
                // topFactor="0.01"
                // leftFactor="-0.03"
                breakpoint="hidden lg:flex 2xl:hidden "
            />

            <Circle
                size="200px"
                color="linear-gradient(197.74deg, #38C7BE 14.67%, #E3BC56 87.87%)"
                left="1321"
                top="650"
                // topFactor="-0.1"
                // leftFactor="0.1"
                breakpoint="hidden 2xl:flex "
            />

            <Circle
                size="120px"
                color="linear-gradient(313.5deg, #3893C7 20.36%, #6A56E3 90.81%)"
                left="1021"
                top="467"
                // topFactor="0.05"
                // leftFactor="-0.01"
                breakpoint="hidden xl:flex "
            />

            <Circle
                size="280px"
                color="linear-gradient(197.74deg, #81D8FD 14.67%, #AEE356 87.87%)"
                top="-78"
                left="-24"
                // topFactor="0.02"
                // leftFactor="0.01"
                breakpoint="hidden md:flex "
            />

            <Circle
                size="260px"
                color="linear-gradient(122.92deg, #81D8FD 14.51%, #D45DE8 90.11%)"
                left="170"
                top="690"
                // topFactor="-0.02"
                // leftFactor="0.01"
                breakpoint="hidden md:flex "
            />
        </div>
    );
};

export default Circles;