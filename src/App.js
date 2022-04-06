import "./App.css";
import { Button } from "./components/button/Button";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { VscClose } from "react-icons/vsc";
import { Card } from "./components/card/Card";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";
import { Tag } from "./components/tag/Tag";
import { Title } from "./components/title/Title";
import { Modal } from "./components/modal/Modal";

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
      <Button className="sort-btn">Sort</Button>
      <br />
      <br />
      <Button className="select-btn"> Select</Button>
      <br />
      <br />
      <Button className="close-btn">
        <VscClose />
      </Button>
      <br />
      <Card />
      <br />
      <br />
      <Title>Leonardo Dicaprio</Title>
      <Button className="readmore-readless">
        Read more
        <IoIosArrowForward className="forward" />
      </Button>

      <br />
      <br />
      <Button className="edit">
        Edit
        <MdOutlineModeEdit />
      </Button>
      <br />
      <br />
      <Tag>Dancing</Tag>
      <br />
      <br />

      <Tag>Modeling</Tag>
      <br />
      <br />
      <Button className="new-actor">Add new actor</Button>

      <br />
      <br />

      <Modal modalType="sort" />
      <br />
      <br />
      <Modal modalType="select" />
      <br />
      <br />
      <Modal modalType="add" />

      <Footer />
    </div>
  );
}

export default App;
