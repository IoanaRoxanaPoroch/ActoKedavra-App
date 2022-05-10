import { Button } from "../button/Button";
import "./SortActors.css";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

export const SortActors = (openModal) => {
  return (
    <div className="sort-actors">
      <Button
        type="btn-type-2"
        className="sort-actors-btn"
        onClick={() => openModal(false)}
      >
        <AiOutlineArrowUp className="arrow-icon" />
        Ascending
      </Button>
      <Button
        type="btn-type-2"
        className="sort-actors-btn"
        onClick={() => openModal(false)}
      >
        <AiOutlineArrowDown className="arrow-icon" />
        Descending
      </Button>
    </div>
  );
};
