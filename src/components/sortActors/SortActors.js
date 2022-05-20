import { Button } from "../button/Button";
import "./SortActors.css";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { useState } from "react";

export const SortActors = ({ openSortModal, actorsToSort }) => {
  const [actorsSort, setActorsSort] = useState(actorsToSort);

  const onClickAscending = () => {
    openSortModal(false);
    setActorsSort(
      actorsSort.sort((a, b) => {
        return a.score - b.score;
      })
    );
  };

  const onClickDescending = () => {
    openSortModal(false);
    setActorsSort(
      actorsSort.sort((a, b) => {
        return b.score - a.score;
      })
    );
  };

  return (
    <div className="sort-actors">
      <Button
        type="btn-type-2"
        className="sort-actors-btn"
        onClick={onClickAscending}
      >
        <AiOutlineArrowUp className="arrow-icon" />
        Ascending
      </Button>
      <Button
        type="btn-type-2"
        className="sort-actors-btn"
        onClick={onClickDescending}
      >
        <AiOutlineArrowDown className="arrow-icon" />
        Descending
      </Button>
    </div>
  );
};
