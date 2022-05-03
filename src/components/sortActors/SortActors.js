import { Button } from "../button/Button";
import "./SortActors.css";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { Title } from "../title/Title";

export const SortActors = () => {
  return (
    <div className="frame-sort">
      <Button type="btn-type-2">
        <AiOutlineArrowUp className="ascending-arrow-icon" />
        Ascending
      </Button>
      <Button type="btn-type-2">
        <AiOutlineArrowDown className="descending-arrow-icon" />
        Descending
      </Button>
    </div>
  );
};
