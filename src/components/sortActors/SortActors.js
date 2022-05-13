import { Button } from "../button/Button";
import "./SortActors.css";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

export const SortActors = ({ openSortModal }) => {
  console.log("openModal receveid", openSortModal);
  // const handleClick = () => {
  //   openSortModal(false);
  // };  
  return (
    <div className="sort-actors">
      <Button
        type="btn-type-2"
        className="sort-actors-btn"
        onClick={() => openSortModal(false)}
      >
        <AiOutlineArrowUp className="arrow-icon" />
        Ascending
      </Button>
      <Button
        type="btn-type-2"
        className="sort-actors-btn"
        // onClick={handleClick}
      >
        <AiOutlineArrowDown className="arrow-icon" />
        Descending
      </Button>
    </div>
  );
};
