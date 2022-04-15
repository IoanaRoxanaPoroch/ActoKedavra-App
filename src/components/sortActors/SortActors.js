import { Button } from "../button/Button";
import "./SortActors.css";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { Title } from "../title/Title";

export const SortActors = () => {
  return (
    <div className="frame-sort">
      <Title className="sort-title-styles">Select type of sort</Title>
      <Button className="ascending-btn">
        <div>
          <AiOutlineArrowUp className="ascending-arrow-icon" />
          Ascending
        </div>
      </Button>
      <Button className="descending-btn">
        <AiOutlineArrowDown className="descending-arrow-icon" />
        Descending
      </Button>
    </div>
  );
};
