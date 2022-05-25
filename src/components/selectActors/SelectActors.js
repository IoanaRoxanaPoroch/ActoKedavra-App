import { Field } from "../field/Field";
import { Button } from "../button/Button";
import { RiDeleteBinLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import "./SelectActors.css";
import { deleteActor } from "../../api/actors";

export const SelectActors = ({
  openSelectModal,
  allChecked,
  textTitle,
  number,
  actorsToDelete,
}) => {
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

  const deleteActors = async () => {
    actorsToDelete.forEach(async (actor) => {
      if (actor) {
        await deleteActor(actor);
      }
    });
  };
  return (
    <div className="select-actors">
      <div className={window.innerWidth > 1025 ? "select-actors-large" : ""}>
        <Field
          type="checkbox"
          value="all"
          className="select-actors-field"
          onClick={toggleType}
        >
          Select all
        </Field>
      </div>
      <div className="select-actors-delete-btn">
        <Button
          type={
            isActive || number > 0 ? "btn-type-2" : "btn-type-2 btn-opacity"
          }
          className="select-actors-btn"
          onClick={() => {
            openSelectModal(false);
            deleteActors();
          }}
        >
          <RiDeleteBinLine className="delete-icon" />
          Delete
        </Button>
      </div>
    </div>
  );
};
