import { Field } from "../field/Field";
import { Button } from "../button/Button";
import { RiDeleteBinLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import "./SelectActors.css";

export const SelectActors = ({ openSelectModal, allChecked, textTitle }) => {
  const [isActive, setActive] = useState(false);
  const toggleType = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    allChecked(isActive);
    if (isActive) {
      textTitle("All Selected");
    } else {
      textTitle("0 Selected");
    }
  }, [isActive]);

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
          onClick={() => openSelectModal(false)}
        >
          <RiDeleteBinLine className="delete-icon" />
          Delete
        </Button>
      </div>
    </div>
  );
};
