import React from "react";
import "./Heading.css";
const Heading = (props) => {
  return (
    <>
      <h1 className={props.h1Class} data-aos="fade-down">
        <span className={props.spanClass}>{props.title}</span>
      </h1>
    </>
  );
};
export default React.memo(Heading);
