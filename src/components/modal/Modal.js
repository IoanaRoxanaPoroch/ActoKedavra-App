import { Button } from "../button/Button";
import { useState } from "react";
import "./Modal.css";
import { VscClose } from "react-icons/vsc";

export const Modal = ({ children, isVisible, className, displayCloseBtn }) => {
  const [visible, setIsVisible] = useState(isVisible);
  // solutie pentru displayCloseBtn- pentru celelate situatii, cand are valoarea undefined
  return (
    visible && (
      <div className={`modal ${className}`}>
        <div className="modal-close-btn-div">
          <Button className={`modal-close-btn ${displayCloseBtn}`}>
            <VscClose
              className={displayCloseBtn}
              onClick={() => setIsVisible(false)}
            />
          </Button>
        </div>
        {children}
      </div>
    )
  );
};
