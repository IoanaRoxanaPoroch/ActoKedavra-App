import { Button } from "../button/Button";
import "./SortActors.css";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { useState } from "react";

export const SortActors = ({
  openSortModal,
  actorsToSort,
  sortedActors,
  className,
}) => {
  const [actorsSort, setActorsSort] = useState(actorsToSort);

  const sortAscending = () => {
    openSortModal(false);
    setActorsSort(
      actorsSort.sort((a, b) => {
        return a.score - b.score;
      })
    );
  };

  const sortDescending = () => {
    openSortModal(false);
    setActorsSort(
      actorsSort.sort((a, b) => {
        return b.score - a.score;
      })
    );
  };

  const handleChange = (e) => {
    if (e.target.value === "ascending") {
      setActorsSort(
        actorsSort.sort((a, b) => {
          return a.score - b.score;
        })
      );

      sortedActors(actorsSort);
    } else {
      setActorsSort(
        actorsSort.sort((a, b) => {
          return b.score - a.score;
        })
      );

      sortedActors(actorsSort);
    }
  };

  return (
    <>
      {window.innerWidth > 1024 && (
        <select
          name="cards"
          id="cards"
          className={`btn-type-4 sort-actors-select-btn ${className}`}
          onChange={handleChange}
        >
          <option value="sort">Sort</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      )}
      {window.innerWidth < 1025 && (
        <div className={`sort-actors `}>
          <Button
            type="btn-type-2"
            className="sort-actors-btn"
            onClick={sortAscending}
          >
            <AiOutlineArrowUp className="arrow-icon" />
            Ascending
          </Button>
          <Button
            type="btn-type-2"
            className="sort-actors-btn"
            onClick={sortDescending}
          >
            <AiOutlineArrowDown className="arrow-icon" />
            Descending
          </Button>
        </div>
      )}
    </>
  );
};
