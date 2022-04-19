import { Button } from "../button/Button";
import "./NotificationWindow.css";
import { VscClose } from "react-icons/vsc";
import { useState } from "react";
import { BsQuestionCircle } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsExclamationCircle } from "react-icons/bs";

export const NotificationWindow = ({ isVisible, text, className }) => {
  const [visible, setIsVisible] = useState(isVisible);

  const alertTypes = {
    success: {
      icon: <AiOutlineCheckCircle />,
    },
    warning: {
      icon: <BsQuestionCircle />,
    },

    danger: {
      icon: <BsExclamationCircle />,
    },
  };
  const getAlert = (param) => {
    if (param.className === "success") {
      return alertTypes.success.icon;
    } else if (param.className === "warning") {
      return alertTypes.warning.icon;
    } else {
      return alertTypes.danger.icon;
    }
  };

  const type = getAlert({ className });

  return (
    visible && (
      <div className={`notification ${className}`}>
        <div className="icon-text-container">
          {type}
          <p>{text}</p>
        </div>
        <div className="close-btn-alert-container">
          <Button className={`close-btn-notification-window ${className}`}>
            <VscClose onClick={() => setIsVisible(false)} />
          </Button>
        </div>
      </div>
    )
  );
};
