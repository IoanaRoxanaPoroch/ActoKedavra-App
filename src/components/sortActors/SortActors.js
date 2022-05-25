import { Button } from "../button/Button";
import "./SortActors.css";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { useEffect, useState } from "react";

export const SortActors = ({ openSortModal, actorsToSort, sortedActors }) => {
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
    console.log("in functie");
    if (e.target.value === "ascending") {
      setActorsSort(
        actorsSort.sort((a, b) => {
          return a.score - b.score;
        })
      );
      console.log("bbbb");
    } else {
      setActorsSort(
        actorsSort.sort((a, b) => {
          return b.score - a.score;
        })
      );
      console.log("desc");
    }
    console.log("zzz", actorsSort);
  };

  useEffect(() => {
    console.log("in useEffect");
    console.log("use effect actorsSort", actorsSort);
    sortedActors(actorsSort);
  }, [actorsSort]);

  return (
    <>
      {window.innerWidth > 1024 && (
        <select
          name="cards"
          id="cards"
          className="btn-type-4 sort-actors-select-btn"
          onChange={handleChange}
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      )}
      {window.innerWidth < 1025 && (
        <div className="sort-actors">
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
