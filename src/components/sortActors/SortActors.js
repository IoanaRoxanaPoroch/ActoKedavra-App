import { Button } from "../button/Button";
import "./SortActors.css";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

export const SortActors = () => {
  return (
    <div className="frame-sort">
      <Button type="btn-type-2">
        <AiOutlineArrowUp className="arrow-icon" />
        Ascending
      </Button>
      <Button type="btn-type-2">
        <AiOutlineArrowDown className="arrow-icon" />
        Descending
      </Button>
    </div>
  );
};
