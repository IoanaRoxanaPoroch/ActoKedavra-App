import "./WarningAlert.css";
import { BsQuestionCircle } from "react-icons/bs";

export const WarningAlert = ({ text }) => {
  return (
    <div className="icon-text-container-warning">
      <BsQuestionCircle className="icon-question-mark-notification-window" />
      <p>{text}</p>
    </div>
  );
};
