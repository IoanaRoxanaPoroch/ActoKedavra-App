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

  // Sort Modal
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

  // Select Modal
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

  // Add new actor Modal
  const addType = (
    <div className="container">
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
        <Field
          type="text"
          value="occupation besides acting"
          className="text-label-add"
        >
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
          maxLength="50"
          className="text-label-add"
          labelText=" Short description"
        ></TextArea>
      </div>
      <Button className=" new-actor-btn add-edit-btn">Add new actor</Button>
      <Button className="changed-mind-btn">I changed my mind</Button>
    </div>
  );

  // Add new actor - field required Modal

  const addRqrdType = (
    <div className="container">
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
        <Field
          type="text"
          value="occupation besides acting"
          className="text-label-add"
        >
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
          maxLength="50"
          className="text-label-add"
          labelText=" Short description"
        ></TextArea>
      </div>
      <Button className=" new-actor-btn add-edit-btn">Add new actor</Button>
      <Button className="changed-mind-btn">I changed my mind</Button>
    </div>
  );

  // Edit Modal
  const editType = (
    <div className="container">
      <div className="modal-close-btn-div">
        <Button className="modal-close-btn">
          <VscClose />
        </Button>
      </div>
      <Title>Edit actor</Title>
      <div className="form-container">
        <Field type="text" value="name" className="text-label-add">
          Name
        </Field>
      </div>
      <div className="form-container">
        <Field
          type="text"
          value="occupation besides acting"
          className="text-label-add"
        >
          Principal job
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
          maxLength="50"
          className="text-label-add"
          labelText=" Short description"
        ></TextArea>
      </div>
      <Button className=" new-actor-btn add-edit-btn">Update</Button>
      <Button className="changed-mind-btn">I changed my mind</Button>
    </div>
  );
  if (modalType === "sort") {
    model = sortType;
  } else if (modalType === "select") {
    model = selectType;
  } else if (modalType === "add") {
    model = addType;
  } else if (modalType === "edit") {
    model = editType;
  } else if (modalType === "addRqrd") {
    model = addRqrdType;
  }
  return <div className="modal">{model}</div>;
};
