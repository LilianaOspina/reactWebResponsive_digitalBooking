import "./Button.css";

const Button = (props) => {
  const variantClassName =
    props.variant === "secondary" ? "secondary" : "primary";
  const sizeClassName = props.size === "full" ? "fullSize" : "";

  return (
    <button
      className={"btn Button-2 " + variantClassName + " " + sizeClassName}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
