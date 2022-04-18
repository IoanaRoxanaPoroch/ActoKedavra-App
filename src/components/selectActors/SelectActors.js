import { Title } from "../title/Title";
import { Field } from "../field/Field";
import { Button } from "../button/Button";
import { RiDeleteBinLine } from "react-icons/ri";
import "./SelectActors.css";

const SelectActors = () => {
  return (
    <div className="select-container">
      <Title className="select-title-styles">Number of items selected</Title>
      <Field type="checkbox" value="all" className="checkbox-select-modal">
        Select all
      </Field>
      <div className="delete-btn-container">
        <Button className="delete-btn">
          <RiDeleteBinLine className="delete-icon" />
          Delete
        </Button>
      </div>
    </div>
  );
};

export default SelectActors;
