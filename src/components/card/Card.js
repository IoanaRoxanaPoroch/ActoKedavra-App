import "./Card.css";
import { AiOutlineLike } from "react-icons/ai";
import { Title } from "../title/Title";
import { Button } from "../button/Button";
import { IoIosArrowForward } from "react-icons/io";
import { VscClose } from "react-icons/vsc";

export const Card = ({ sourceImage, textImage, jobs, likes, description }) => {
  return (
    <div className="card">
      <div className="btn-card-container">
        <Button className="close-btn">
          <VscClose />
        </Button>
      </div>
      <img src={sourceImage} alt={textImage} className="actor-img" />
      <Title>Leonardo Dicaprio</Title>
      <div className="job-likes">
        <p className="jobs">{jobs}</p>
        <p className="likes">
          {likes}
          <AiOutlineLike />
        </p>
      </div>
      <Button className="readmore-readless-btn">
        Read more
        <IoIosArrowForward className="forward-arrow-btn" />
      </Button>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
};
