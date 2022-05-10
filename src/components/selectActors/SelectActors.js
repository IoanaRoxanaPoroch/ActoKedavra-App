import { Field } from "../field/Field";
import { Button } from "../button/Button";
import { RiDeleteBinLine } from "react-icons/ri";
import { useState } from "react";
import "./SelectActors.css";

export const SelectActors = (openModal) => {
  const [isActive, setActive] = useState(false);
  const [textTitle, setTitle] = useState("");

  const toggleType = () => {
    setActive(!isActive);
    setTitle("All Selected");
  };

  return (
    <div className="select-actors">
      <Field
        type="checkbox"
        value="all"
        className="select-actors-field"
        onClick={toggleType}
      >
        Select all
      </Field>
      <div className="select-actors-delete-btn">
        <Button
          type={isActive ? "btn-type-2" : "btn-type-2-1"}
          className="select-actors-btn"
          onClick={() => openModal(false)}
        >
          <RiDeleteBinLine className="delete-icon" />
          Delete
        </Button>
      </div>
    </div>
  );
};
