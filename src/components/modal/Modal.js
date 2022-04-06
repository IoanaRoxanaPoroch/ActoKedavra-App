import { Button } from "../button/Button";
import "./Modal.css";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { Title } from "../title/Title";
import { VscClose } from "react-icons/vsc";
import { RiDeleteBinLine } from "react-icons/ri";
import { Field } from "../field/Field";
import { TextArea } from "../textarea/TextArea";

export const Modal = ({ modalType }) => {
  let model = <div></div>;
  const sortType = (
    <div className="frame-sort">
      <Title>Select type sort</Title>
      <Button className="ascending-btn">
        <AiOutlineArrowUp />
        Ascending
      </Button>
      <Button className="descending-btn">
        <AiOutlineArrowDown />
        Descending
      </Button>
    </div>
  );
  const selectType = (
    <div className="select-container">
      <div className="modal-close-btn-div">
        <Button className="modal-close-btn">
          <VscClose />
        </Button>
      </div>
      <Title>Number of items selected</Title>
      <Field type="checkbox" value="all" className="checkbox-select-modal">
        Select all
      </Field>
      <div className="delete-btn-container">
        <Button className="delete-btn">
          <RiDeleteBinLine />
          Delete
        </Button>
      </div>
    </div>
  );
  const addType = (
    <div className="add-container">
      <div className="modal-close-btn-div">
        <Button className="modal-close-btn">
          <VscClose />
        </Button>
      </div>
      <Title>Add new actor</Title>
      <div className="form-container">
        <Field type="text" value="name" className="text-label-add">
          Name
        </Field>
      </div>
      <div className="form-container">
        <Field type="text" value="name" className="text-label-add">
          Occupation besides acting
        </Field>
      </div>
      <div className="form-container">
        <Field type="text" value="name" className="text-label-add">
          Hobbies
        </Field>
      </div>
      <div className="form-container">
        <TextArea
          id="description"
          name="description"
          maxlength="50"
          className="text-label-add"
        ></TextArea>
      </div>
      <Button className="add-btn">Add new actor</Button>
    </div>
  );
  if (modalType === "sort") {
    model = sortType;
  } else if (modalType === "select") {
    model = selectType;
  } else if (modalType === "add") {
    model = addType;
  }

  return <div className="modal">{model}</div>;
};
