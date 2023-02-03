import React, { useRef } from "react";

function Page(props) {
  const pageRef = useRef(null);

  return (
    <div ref={pageRef} id={props.name} className="page">
        {props.children}
    </div>
  );
}

export default Page;