import "./Home.css";
import { Button } from "../button/Button";
import { Card } from "../card/Card";
import { Modal } from "../modal/Modal";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { AddEditActor } from "../addEditActor/AddEditActor";
import uuid from "react-uuid";

const Home = () => {
  const [actors, setActors] = useState(null);
  const [open, setIsOpen] = useState(false);

  const getActors = async () => {
    return await axios.get("http://localhost:3000/actors");
  };

  const getActorById = async (id) => {
    return await axios.get(`http://localhost:3000/actors/${id}`);
  };

  useEffect(() => {
    const getResponse = async () => {
      let response = await getActors();
      if (response && response.data) {
        setActors(response.data);
      }
    };
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
    axios.post("http://localhost:3000/actors", actorSave);
    setActors([...actors, actorSave]);
  };

  // edit & remove functionality
  const getUpdates = async (id, actorEdited) => {
    if (actorEdited) {
      let actor = await getActorById(id);
      if (actor.data) {
        let saveActor = { ...actor.data, ...actorEdited };
        delete saveActor.characters;
        await axios.put(`http://localhost:3000/actors/${id}`, saveActor);

        setActors(actors.map((actor) => (actor.id === id ? saveActor : actor)));
      }
    } else {
      let deleteActor = actors.find((actor) => {
        return actor.id === id;
      });
      await axios.delete(`http://localhost:3000/actors/${id}`, deleteActor);
      setActors(
        actors.filter((actor) => {
          return actor.id !== id;
        })
      );
    }
  };

  return (
    <div>
      <Header />
      <div className="top-btns-container">
        <Button type="btn-type-1">Sort</Button>
        <Button type="btn-type-1">Select</Button>
      </div>
      <div className="cards-container">
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
          />
        ))}
      </div>
      <Button
        className="home-positiong"
        type="btn-primary"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Add new actor
      </Button>
      {open && (
        <Modal
          className="modal-overlay"
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
  );
};

export default Home;
