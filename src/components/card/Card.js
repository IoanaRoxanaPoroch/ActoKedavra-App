import "./Card.css";
import { AiOutlineLike } from "react-icons/ai";
import { Title } from "../title/Title";
import { Button } from "../button/Button";
import { IoIosArrowForward } from "react-icons/io";
import { VscClose } from "react-icons/vsc";
import { MdOutlineModeEdit } from "react-icons/md";
import { Tag } from "../tag/Tag";
import PropTypes from "prop-types";

export const Card = ({
  title,
  sourceImage,
  textImage,
  jobs,
  likes,
  hobbies,
  description,
}) => {
  const hobbiesReceived = { hobbies };
  return (
    <div className="card">
      <div className="btn-card-container">
        <Button className="close-btn">
          <VscClose />
        </Button>
      </div>
      <img src={sourceImage} alt={textImage} className="actor-img" />
      <Title>{title}</Title>
      <div className="job-likes">
        <p className="jobs">{jobs}</p>
        <p className="likes">
          {likes}
          <AiOutlineLike />
        </p>
      </div>
      <div className="tags-container">
        {hobbiesReceived.hobbies?.map((hobbie, index) => (
          <Tag key={index}>{hobbie}</Tag>
        ))}
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
      <Button className="readmore-readless-btn">
        Read more
        <IoIosArrowForward className="forward-arrow-btn" />
      </Button>
      <Button className="edit-btn">
        Edit
        <MdOutlineModeEdit className="edit-icon" />
      </Button>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  sourceImage: PropTypes.string,
  jobs: PropTypes.string,
  likes: PropTypes.number,
  hobbies: PropTypes.array,
  description: PropTypes.string,
};
