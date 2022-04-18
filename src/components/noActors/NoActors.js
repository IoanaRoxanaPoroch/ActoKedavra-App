import { Button } from "../button/Button";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./NoActors.css";
import { HiOutlineEmojiSad } from "react-icons/hi";

export const NoActors = ({ mainText }) => {
  return (
    <div className="no-actors-container">
      <Header />
      <div className="content-wrapper">
        <div className="sad-icon-container">
          <HiOutlineEmojiSad className="sad-icon" />
        </div>
        <p>{mainText}</p>
        <div className="btn-container">
          <Button className="new-actor-update-btn no-actors-add-actor-btn">
            Add new actor
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
