import { Button } from "../button/Button";
import "./NotificationWindow.css";
import { VscClose } from "react-icons/vsc";
import { useState } from "react";

export const NotificationWindow = ({
  isVisible,
  children,
  containerClassName,
  btnClassName,
}) => {
  const [visible, setIsVisible] = useState(isVisible);

  return (
    visible && (
      <div className={containerClassName}>
        {children}
        <div className="close-btn-alert-container">
          <Button className={`close-btn ${btnClassName}`}>
            <VscClose onClick={() => setIsVisible(false)} />
          </Button>
        </div>
      </div>
    )
  );
};
