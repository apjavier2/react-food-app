import classes from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/*...props.input spreads all the properties of props.input
      e.g.
      {type:"text"} -> type="text"
      */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
