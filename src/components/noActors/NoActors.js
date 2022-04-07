import { Button } from "../button/Button";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./NoActors.css";
import { HiOutlineEmojiSad } from "react-icons/hi";

export const NoActors = () => {
  return (
    <div  className="no-actors-container">
      <Header />
      <div className="content-wrapper">
        <div className="sad-icon-container">
          <HiOutlineEmojiSad className="sad-icon" />
        </div>
        <p>There are no actors here. Consider adding one.</p>
        <div className="btn-container">
          <Button className="new-actor-btn no-actors-btn">Add new actor</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
