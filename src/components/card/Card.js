import "./Card.css";
import { AiOutlineLike } from "react-icons/ai";
import { Title } from "../title/Title";
import { Button } from "../button/Button";
import { VscClose } from "react-icons/vsc";
import { MdOutlineModeEdit } from "react-icons/md";
import { Tag } from "../tag/Tag";
import PropTypes from "prop-types";
import Content from "../readMoreLess/ReadMore";
import { useState } from "react";
import { Modal } from "../modal/Modal";
import { AddEditActor } from "../addEditActor/AddEditActor";

export const Card = ({
  id,
  name,
  sourceImage,
  textImage,
  occupation,
  likes,
  hobbies,
  description,
  updates = { updates },
}) => {
  const [open, setIsOpen] = useState(false);
  const hobbiesReceived = { hobbies };
  const details = { id, name, occupation, hobbies, description };

  const onClickOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="card">
      <div className="btn-card-container">
        <Button className="close-btn">
          <VscClose />
        </Button>
      </div>
      <img src={sourceImage} alt={textImage} className="actor-img" />
      <Title>{name}</Title>
      <div className="job-likes">
        <p className="jobs">{occupation}</p>
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
        <Content text={description} />
      </div>
      <Button type="btn-type-2" onClick={onClickOpen}>
        Edit
        <MdOutlineModeEdit className="edit-icon" />
      </Button>
      {open && (
        <Modal
          openModal={(open) => setIsOpen(open)}
          title="Edit actor"
          className="modal-overlay"
        >
          <AddEditActor
            btnPrimaryText="Update"
            openModal={(open) => setIsOpen(open)}
            actorDetails={details}
            updates={updates}
          />
        </Modal>
      )}
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
