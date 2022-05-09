import { Button } from "../button/Button";
// import { useEffect, useState } from "react";
import "./Modal.css";
import { VscClose } from "react-icons/vsc";
import { Title } from "../title/Title";
import ReactDom from "react-dom";

export const Modal = ({ className, openModal, title, children }) => {
  return ReactDom.createPortal(
    <div className={className}>
      <div className={`modal ${className}`}>
        <div className="modal-close-btn-div">
          <Button type="close-btn" className="modal-close-btn">
            <VscClose onClick={() => openModal(false)} />
          </Button>
        </div>
        <Title className="modal-title">{title}</Title>
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  );
};
