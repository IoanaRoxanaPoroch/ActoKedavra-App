import { Button } from "../button/Button";
import { useState } from "react";
import "./Modal.css";
import { VscClose } from "react-icons/vsc";

export const Modal = ({ children, isVisible }) => {
  const [visible, setIsVisible] = useState(isVisible);

  return (
    visible && (
      <div className="modal">
        <div className="modal-close-btn-div">
          <Button className="modal-close-btn">
            <VscClose onClick={() => setIsVisible(false)} />
          </Button>
        </div>
        {children}
      </div>
    )
  );
};
