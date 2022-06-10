import { Button } from "../button/Button";
import "./NotificationWindow.css";
import { VscClose } from "react-icons/vsc";
import { useEffect } from "react";
import { BsQuestionCircle } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsExclamationCircle } from "react-icons/bs";

export const NotificationWindow = ({ isVisible, text, className }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      isVisible(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

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
    <div
      className={
        isVisible
          ? `notification-window ${className} show`
          : `notification-window ${className} hide`
      }
    >
      <div className="notification-window-icon-text">
        {type}
        <span className="notification-window-text">{text}</span>
        <Button className={`notification-window-close-btn ${className}`}>
          <VscClose
            onClick={() => {
              isVisible(false);
            }}
          />
        </Button>
      </div>
    </div>
  );
};
