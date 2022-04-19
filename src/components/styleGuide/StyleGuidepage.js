import "./StyleGuidePage.css";
import { MdOutlineModeEdit } from "react-icons/md";
import { Button } from "../button/Button";
import { Card } from "../card/Card";
import { Tag } from "../tag/Tag";
import { Modal } from "../modal/Modal";
import { SortActors } from "../sortActors/SortActors";
import { SelectActors } from "../selectActors/SelectActors";
import { AddActor } from "../addActor/AddActor";
import { EditActor } from "../editActor/EditActor";
import { NotificationWindow } from "../notificationWindow/NotificationWindow";
import { NoActors } from "../noActors/NoActors";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";

const StyleGuidepage = () => {
  const [actors, setActors] = useState(null);

  const getActors = async () => {
    return await axios.get("http://localhost:3000/actors");
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

  return (
    <div>
      <Header />
      <div className="top-btns-container">
        <Button className="sort-btn">Sort</Button>
        <Button className="select-btn">Select</Button>
      </div>
      <div className="cards-container">
        {actors?.map((actor, index) => (
          <Card
            key={index}
            title={actor.name}
            sourceImage={actor.picture}
            textImage={actor.name}
            jobs={actor.occupation}
            likes={actor.score}
            hobbies={actor.hobbies}
            description={actor.description}
          />
        ))}
      </div>
      <br />
      <br />
      <Button className="edit-btn">
        Edit
        <MdOutlineModeEdit className="edit-icon" />
      </Button>
      <br />
      <br />
      <Tag>Dancing</Tag>
      <br />
      <Tag>Modeling</Tag>
      <br />
      <br />
      <Button className="new-actor-update-btn">Add new actor</Button>
      <br />
      <br />
      <Modal isVisible={true} className="sort-type" displayCloseBtn="none">
        <SortActors />
      </Modal>
      <br />
      <br />
      <Modal isVisible={true} className="select-type">
        <SelectActors />
      </Modal>
      <br />
      <br />
      <Modal isVisible={true} className="add-actor-type">
        <AddActor />
      </Modal>
      <br />
      <br />
      <Modal isVisible={true}>
        <EditActor />
      </Modal>
      <br />
      <br />
      <NoActors mainText="There are no actors here. Consider adding one." />
      <br />
      <br />
      <NotificationWindow
        isVisible={true}
        className="success"
        text="Actor added successfully."
      ></NotificationWindow>
      <br />
      <br />
      <NotificationWindow
        isVisible={true}
        className="warning"
        text="You can add max. 7 actors."
      ></NotificationWindow>
      <br />
      <br />
      <NotificationWindow
        isVisible={true}
        className="danger"
        text="Your changes were not saved."
      ></NotificationWindow>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default StyleGuidepage;
