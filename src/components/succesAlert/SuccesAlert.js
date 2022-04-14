import "./SuccesAlert.css";
import { AiOutlineCheckCircle } from "react-icons/ai";

const SuccesAlert = ({ text }) => {
  return (
    <div>
      <div className="icon-contaier">
        <AiOutlineCheckCircle className="icon-checked-notification-window" />
      </div>
      <div className="text-container">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SuccesAlert;
