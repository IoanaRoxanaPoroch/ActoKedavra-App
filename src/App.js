import "./App.css";
import { Button } from "./components/button/Button";
import "./components/button/Button.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Card } from "./components/card/Card";
import { MdOutlineModeEdit } from "react-icons/md";
import { Tag } from "./components/tag/Tag";
import { Modal } from "./components/modal/Modal";
import { NoActors } from "./components/noActors/NoActors";
import { NotificationWindow } from "./components/notificationWindow/NotificationWindow";
import { AddActor } from "./components/addActor/AddActor";
import { EditActor } from "./components/editActor/EditActor";
import SelectActors from "./components/selectActors/SelectActors";
import { SortActors } from "./components/sortActors/SortActors";
import SuccesAlert from "./components/succesAlert/SuccesAlert";
import { WarningAlert } from "./components/warningAlert/WarningAlert";

function App() {
  const actor = {
    name: "Leonardo Dicaprio",
    score: 10,
    hobbies: "Music and dancing naked in the rain",
    description: "He is a good guy with a thick mustache",
  };
  return (
    <div className="App">
      <Header />
      <div className="top-btns-container">
        <Button className="sort-btn">Sort</Button>
        <Button className="select-btn">Select</Button>
      </div>
      <div className="cards-container">
        <Card
          sourceImage="https://static.cinemagia.ro/img/resize/db/actor/00/19/00/leonardo-dicaprio-291378l-600x0-w-53f4f492.jpg"
          textImage="Leonardo Dicaprio"
          jobs="Actor & Writer"
          likes=" 47"
          description="Leonardo Wilhelm DiCaprio is an American actor and film producer.
        Known for his work in biopics and period films, he is the recipient of
        numerous accolades, including an Academy Award, a British Academy Film
        Award, and three Golden Globe Awards. As of 2019, his films have
        grossed over $7.2 billion worldwide, and he has been placed eight
        times in annual rankings of the world's highest-paid actors."
        />
        <Card
          sourceImage="https://static.cinemagia.ro/img/resize/db/actor/00/19/00/leonardo-dicaprio-291378l-600x0-w-53f4f492.jpg"
          textImage="Leonardo Dicaprio"
          jobs="Actor & Writer"
          likes=" 47"
          description="Leonardo Wilhelm DiCaprio is an American actor and film producer.
        Known for his work in biopics and period films, he is the recipient of
        numerous accolades, including an Academy Award, a British Academy Film
        Award, and three Golden Globe Awards. As of 2019, his films have
        grossed over $7.2 billion worldwide, and he has been placed eight
        times in annual rankings of the world's highest-paid actors."
        />
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
      <Button className="new-actor-btn">Add new actor</Button>
      <br />
      <br />
      <Modal isVisible={true} className="sort-type" displayCloseBtn="none">
        <SortActors />
      </Modal>
      <br />
      <br />
      <Modal isVisible={true}>
        <SelectActors />
      </Modal>
      <br />
      <br />
      <Modal isVisible={true}>
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
        containerClassName="notification-container-success"
        btnClassName="close-btn-success-notification-window"
      >
        <SuccesAlert text="Actor added successfully" />
      </NotificationWindow>
      <br />
      <br />
      <NotificationWindow
        isVisible={true}
        containerClassName="notification-container-warning"
        btnClassName="close-btn-warning-notification-window"
      >
        <WarningAlert text="You can add max. 7 actors." />
      </NotificationWindow>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
