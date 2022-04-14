import { Button } from "../button/Button";
import "./SortActors.css";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { Title } from "../title/Title";

export const SortActors = () => {
  return (
    <div className="frame-sort">
      <Title>Select type sort</Title>
      <Button className="ascending-btn">
        <AiOutlineArrowUp />
        Ascending
      </Button>
      <Button className="descending-btn">
        <AiOutlineArrowDown />
        Descending
      </Button>
    </div>
  );
};
