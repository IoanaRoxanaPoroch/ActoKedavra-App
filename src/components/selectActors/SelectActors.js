import { Title } from "../title/Title";
import { Field } from "../field/Field";
import { Button } from "../button/Button";
import { RiDeleteBinLine } from "react-icons/ri";
import "./SelectActors.css";

export const SelectActors = () => {
  return (
    <div className="select-container">
      <Field type="checkbox" value="all" className="checkbox-select-modal">
        Select all
      </Field>
      <div className="delete-btn-container">
        <Button type="btn-type-2">
          <RiDeleteBinLine className="delete-icon" />
          Delete
        </Button>
      </div>
    </div>
  );
};
