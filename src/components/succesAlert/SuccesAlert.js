import "./SuccesAlert.css";
import { AiOutlineCheckCircle } from "react-icons/ai";

const SuccesAlert = ({ text }) => {
  return (
    <div className="icon-text-container-succes">
      <AiOutlineCheckCircle className="icon-checked-notification-window" />
      <p>{text}</p>
    </div>
  );
};

export default SuccesAlert;
