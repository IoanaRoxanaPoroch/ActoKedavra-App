import { Button } from "../button/Button";
import "./Modal.css";
import { VscClose } from "react-icons/vsc";
import { Title } from "../title/Title";
import ReactDom from "react-dom";

export const Modal = ({ className, openModal, title, children }) => {
  return ReactDom.createPortal(
    <div className={`modal ${className}`}>
      <div
        className={
          title !== "0 Selected"
            ? "modal-close-btn-wrapper"
            : "select-modal-close-btn-wrapper "
        }
      >
        <Button
          type="close-btn"
          className={
            title === "0 Selected"
              ? "select-actors-close-btn"
              : "modal-close-btn"
          }
        >
          <VscClose onClick={() => openModal(false)} />
        </Button>
      </div>
      <Title
        className={
          window.innerWidth > 1024 && title === "0 Selected"
            ? "select-title"
            : "modal-title"
        }
      >
        {title}
      </Title>
      {children}
    </div>,
    document.getElementById("portal")
  );
};
