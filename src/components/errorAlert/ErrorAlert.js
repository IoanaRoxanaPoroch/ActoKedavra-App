import "./ErrorAlert.css";
import { BsExclamationCircle } from "react-icons/bs";

const ErrorAlert = ({ text }) => {
  return (
    <div className="icon-text-container-error">
      <BsExclamationCircle className="icon-exclamation-mark-notification-window" />
      <p>{text}</p>
    </div>
  );
};

export default ErrorAlert;
