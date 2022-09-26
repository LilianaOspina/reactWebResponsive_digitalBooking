import "./MensajeError.css";
import  { ReactComponent as WarningIcon }from "../../assets/warning.svg";

const MensajeError = ({ children, show }) => {
  return (
    show && (
      <div className="mensajeError">
        <WarningIcon className="warningIcon"></WarningIcon>
        <h1 className="Heading-1">{children}</h1>
      </div>
    )
  );
};

export default MensajeError;
