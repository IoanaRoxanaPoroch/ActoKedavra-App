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
  isOpenDeleteWarning,
}) => {
  const [isActive, setActive] = useState(false);
  const [allSelected, setAllSelected] = useState(false);
  const toggleType = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    allChecked(isActive);
    setAllSelected(isActive);
    if (isActive) {
      textTitle("All Selected");
    } else {
      textTitle("0 Selected");
    }
  }, [isActive, allChecked, textTitle]);

  const deleteActors = async () => {
    actorsToDelete.forEach(async (actor) => {
      if (actor) {
        await deleteActor(actor);
      }
    });
  };
  return (
    <div className="select-actors">
      <div className={window.innerWidth > 1024 ? "select-actors-large" : ""}>
        <Field
          type="checkbox"
          value="all"
          className="select-actors-field"
          onClick={toggleType}
        >
          Select all
        </Field>
      </div>
      <div className="select-actors-delete-btn-wrapper">
        <Button
          type={
            window.innerWidth < 1025 && (isActive || number > 0)
              ? "btn-type-2"
              : window.innerWidth < 1025 && (!isActive || number === 0)
              ? "btn-type-2 btn-opacity"
              : window.innerWidth > 1025 && (isActive || number > 0)
              ? "btn-primary select-actors-delete-btn"
              : "btn-primary btn-opacity select-actors-delete-btn"
          }
          className="select-actors-btn"
          onClick={() => {
            if (isActive && allSelected) {
              isOpenDeleteWarning(true);
            } else {
              deleteActors();
            }
            openSelectModal(false);
          }}
        >
          <RiDeleteBinLine className="delete-icon" />
          Delete
        </Button>
      </div>
    </div>
  );
};
