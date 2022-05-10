import { Button } from "../button/Button";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "./NoActors.css";
import { HiOutlineEmojiSad } from "react-icons/hi";

export const NoActors = ({ mainText }) => {
  return (
    <div className="no-actors">
      <Header />
      <div className="no-actors-content-wrapper">
        <HiOutlineEmojiSad className="no-actors-sad-icon" />
        <p>{mainText}</p>
        <div className="no-actors-btn-wrapper">
          <Button type="btn-primary" className="no-actors-add-actor-btn">
            Add new actor
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
