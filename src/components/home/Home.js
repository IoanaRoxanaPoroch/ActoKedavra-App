import "./Home.css";
import { Button } from "../button/Button";
import { Card } from "../card/Card";
import { Modal } from "../modal/Modal";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { useState, useEffect } from "react";
import { AddEditActor } from "../addEditActor/AddEditActor";
import { NoActors } from "../noActors/NoActors";
import { SortActors } from "../sortActors/SortActors";
import { SelectActors } from "../selectActors/SelectActors";

import {
  getActors,
  deleteActor,
  addNewActor,
  updateActor,
} from "../../api/actors";

const Home = () => {
  const [actors, setActors] = useState(null);
  const [open, setIsOpen] = useState(false);
  const [openSort, setIsOpenSort] = useState(false);
  const [openSelect, setOpenSelect] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selectTitle, setSelectTitle] = useState("");
  const [number, setNumber] = useState(0);
  const [actorsToDelete, setActorsToDelete] = useState([]);
  let [arrActors, setArrActors] = useState([]);

  const getResponse = async () => {
    let response = await getActors();
    if (response && response.data) {
      setActors(response.data);
    }
  };

  useEffect(() => {
    getResponse();
  }, []);

  // add functionality
  const addActor = async (id, newActor) => {
    delete newActor.characters;
    const actorToAdd = {
      ...newActor,
      hobbies: newActor.hobbies.split(","),
    };
    const response = await addNewActor(actorToAdd);
    if (response.status === 201) {
      setActors([...actors, response.data]);
    }
  };

  // edit & remove functionality
  const getUpdates = async (id, actorEdited) => {
    if (actorEdited) {
      let actor = await getActors(id);
      if (actor.data) {
        let actorToEdit = { ...actor.data, ...actorEdited };
        delete actorToEdit.characters;
        const response = await updateActor(actorToEdit);
        if (response.status === 200) {
          setActors(
            actors.map((actor) => (actor.id === id ? actorToEdit : actor))
          );
        }
      }
    } else {
      let actorToDelete = actors.find((actor) => actor.id === id);
      const resp = await deleteActor(actorToDelete.id);
      if (resp.status === 200) {
        setActors(actors.filter((actor) => actor.id !== id));
      }
    }
  };

  const onClickOpenModal = () => {
    setIsOpen(true);
  };

  const onClickOpenSortModal = () => {
    setIsOpenSort(true);
  };

  const numberOfActorsSelected = (param, id) => {
    let actorSelected = actors.find((actor) => actor.id === parseInt(id));
    if (param) {
      setArrActors([...arrActors, actorSelected]);
    } else {
      arrActors = actorsToDelete.filter((actor) => actor.id !== parseInt(id));
      setArrActors(arrActors);
    }
  };

  useEffect(() => {
    setActorsToDelete(arrActors);
    setNumber(arrActors.length);
  }, [arrActors]);

  const setTitle = (title) => {
    if (title !== "All Selected") {
      return `${number} Selected`;
    } else {
      return title;
    }
  };

  //delete
  // const deleteActorsSelected = async () => {
  //   if (deleteBtnClicked) {
  //     console.log("1. delete btn was clicked");
  //     if (selectTitle === "All Selected") {
  //       // let idsActors = "";
  //       // actors.forEach((actor) => (idsActors += actor.id + ", "));
  //       // idsActors.forEach((id) => deleteActor(idsActors));

  //       // actors.forEach((actor) => await deleteActor(actor));
  //       // let response = actors.forEach(
  //       //   async (actor) => await deleteActor(actor)
  //       // );

  //       setActors([]);
  //     } else if (actorsToDelete.length > 0) {
  //       actorsToDelete.forEach((actor) => deleteActor(actor));
  //     }
  //   }
  // };

  return (
    <>
      {actors?.length > 0 && (
        <div>
          <Header />
          <div className="top-btns-container">
            <Button type="btn-type-1" onClick={onClickOpenSortModal}>
              Sort
            </Button>
            {openSort && (
              <Modal
                className="modal-overlay sort-type"
                openModal={(openSort) => {
                  setIsOpenSort(openSort);
                }}
                title="Select type of sort"
              >
                <SortActors
                  openSortModal={(openSort) => {
                    setIsOpenSort(openSort);
                  }}
                  actorsToSort={actors}
                />
              </Modal>
            )}
            <Button
              type="btn-type-1"
              onClick={() => {
                setOpenSelect(true);
                setArrActors([]);
              }}
            >
              Select
            </Button>
            {openSelect && (
              <Modal
                className="modal-overlay select-type"
                openModal={(openSelect) => setOpenSelect(openSelect)}
                title={setTitle(selectTitle)}
              >
                <SelectActors
                  openSelectModal={(openSelect) => setOpenSelect(openSelect)}
                  allChecked={(selectAll) => {
                    setSelectAll(selectAll);
                  }}
                  textTitle={(selectTitle) => {
                    setSelectTitle(selectTitle);
                  }}
                  number={number}
                  actorsToDelete={
                    selectTitle === "All Selected" ? actors : actorsToDelete
                  }
                />
              </Modal>
            )}
          </div>
          <div
            className={
              openSelect || openSort
                ? "cards-container home-cards-container-down"
                : "cards-container"
            }
          >
            {actors?.map((actor, index) => (
              <Card
                key={index}
                id={actor.id}
                name={actor.name}
                sourceImage={actor.picture}
                textImage={actor.name}
                occupation={actor.occupation}
                likes={actor.score}
                hobbies={actor.hobbies}
                description={actor.description}
                updates={getUpdates}
                openCheckBox={openSelect}
                allActorsSelected={selectAll}
                actorsSelected={numberOfActorsSelected}
              />
            ))}
          </div>
          <Button
            className="home-btn-primary"
            type="btn-primary"
            onClick={onClickOpenModal}
          >
            Add new actor
          </Button>
          {open && (
            <Modal
              className="modal-overlay add-edit-actor-type"
              openModal={(open) => setIsOpen(open)}
              title="Add new actor"
            >
              <AddEditActor
                btnPrimaryText="Add new actor"
                openModal={(open) => setIsOpen(open)}
                actorDetails={false}
                updates={addActor}
              />
            </Modal>
          )}
          <Footer />
        </div>
      )}
      {actors?.length === 0 && (
        <NoActors mainText="There are no actors here. Consider adding one." />
      )}
    </>
  );
};

export default Home;
