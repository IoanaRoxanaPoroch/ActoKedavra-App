import { Button } from "../button/Button";
import { useEffect, useState } from "react";
import "./Modal.css";
import { VscClose } from "react-icons/vsc";
import { Title } from "../title/Title";
import ReactDom from "react-dom";

export const Modal = ({ children, isVisible, className, title }) => {
  const [visible, setIsVisible] = useState(isVisible);
  return ReactDom.createPortal(
    visible && (
      <div className={className}>
        <div className={`modal ${className}`}>
          <div className="modal-close-btn-div">
            <Button className={`modal-close-btn`}>
              <VscClose onClick={() => setIsVisible(false)} />
            </Button>
          </div>
          <Title className="modal-title">{title}</Title>
          {children}
        </div>
      </div>
    ),
    document.getElementById("portal")
  );
};
