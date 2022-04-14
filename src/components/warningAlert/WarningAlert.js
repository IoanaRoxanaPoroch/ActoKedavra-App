import "./WarningAlert.css";
import { BsQuestionCircle } from "react-icons/bs";

export const WarningAlert = ({ text }) => {
  return (
    <div>
      <BsQuestionCircle className="icon-question-mark-notification-window" />
      <p>{text}</p>
    </div>
  );
};
