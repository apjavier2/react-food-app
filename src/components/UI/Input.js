import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/*...props.input spreads all the properties of props.input
      e.g.
      {type:"text"} -> type="text"
      */}
      <input {...props.input} />
    </div>
  );
};

export default Input;
