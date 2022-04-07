import { Button } from "../button/Button";
import "./NotificationWindow.css";
import { VscClose } from "react-icons/vsc";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsQuestionCircle } from "react-icons/bs";

export const NotificationWindow = ({ text, ntfcType }) => {
  let model = <div></div>;

  let successType = (
    <div className="notification-container-success">
      <div className="icon-contaier">
        <AiOutlineCheckCircle className="icon-checked-notification-window" />
      </div>
      <div className="text-container">
        <p>{text}</p>
      </div>
      <Button className="close-btn close-btn-success-notification-window">
        <VscClose />
      </Button>
    </div>
  );
  let warningType = (
    <div className="notification-container-warning">
      <BsQuestionCircle className="icon-question-mark-notification-window" />
      <p>{text}</p>
      <Button className="close-btn close-btn-warning-notification-window">
        <VscClose />
      </Button>
    </div>
  );

  if (ntfcType === "success") {
    model = successType;
  } else {
    model = warningType;
  }
  return <div>{model}</div>;
};
