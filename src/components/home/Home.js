import "./Home.css";
import { Button } from "../button/Button";
import { Card } from "../card/Card";
import { Modal } from "../modal/Modal";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { AddEditActor } from "../addEditActor/AddEditActor";
import { NoActors } from "../noActors/NoActors";
import uuid from "react-uuid";
import { SortActors } from "../sortActors/SortActors";
import { SelectActors } from "../selectActors/SelectActors";

const Home = () => {
  const [actors, setActors] = useState(null);
  const [open, setIsOpen] = useState(false);
  const [openSort, setIsOpenSort] = useState(false);
  const [openSelect, setOpenSelect] = useState(false);
  const [selectAll, setSelectAll] = useState(false);

  console.log("selectAll->", selectAll);

  const getActors = async () => {
    return await axios.get(`${process.env.REACT_APP_API_URL}/actors`);
  };

  const getActorById = async (id) => {
    return await axios.get(`http://localhost:3000/actors/${id}`);
  };

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
    const actorSave = {
      ...newActor,
      hobbies: newActor.hobbies.split(","),
      id: uuid(),
    };
    // validation
    const response = await axios.post(
      "http://localhost:3000/actors",
      actorSave
    );
    if (response.statusText === "Created") {
      setActors([...actors, actorSave]);
    }
  };

  // edit & remove functionality
  const getUpdates = async (id, actorEdited) => {
    if (actorEdited) {
      let actor = await getActorById(id);
      if (actor.data) {
        let saveActor = { ...actor.data, ...actorEdited };
        delete saveActor.characters;
        await axios.put(`http://localhost:3000/actors/${id}`, saveActor);
        // validare response
        setActors(actors.map((actor) => (actor.id === id ? saveActor : actor)));
      }
    } else {
      let deleteActor = actors.find((actor) => {
        return actor.id === id;
      });
      await axios.delete(`http://localhost:3000/actors/${id}`, deleteActor);
      // validare response
      setActors(
        actors.filter((actor) => {
          return actor.id !== id;
        })
      );
    }
  };

  const onClickOpenModal = () => {
    setIsOpen(true);
  };

  const onClickOpenSortModal = () => {
    setIsOpenSort(true);
  };

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
                />
              </Modal>
            )}
            <Button
              type="btn-type-1"
              onClick={() => {
                setOpenSelect(true);
              }}
            >
              Select
            </Button>
            {openSelect && (
              <Modal
                className="modal-overlay select-type"
                openModal={(openSelect) => setOpenSelect(openSelect)}
                title="Number of items selected"
              >
                <SelectActors
                  openSelectModal={(openSelect) => setOpenSelect(openSelect)}
                  allChecked={(selectAll) => {
                    setSelectAll(selectAll);
                  }}
                />
              </Modal>
            )}
          </div>
          <div
            className={
              openSelect
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
