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
  name,
  sourceImage,
  textImage,
  jobs,
  likes,
  hobbies,
  description,
}) => {
  const [open, setIsOpen] = useState(false);
  const hobbiesReceived = { hobbies };
  const details = { name, jobs, hobbies, description };

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
        <Content text={description} />
      </div>
      <Button
        type="btn-type-2"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Edit
        <MdOutlineModeEdit className="edit-icon" />
      </Button>
      {open && (
        <Modal isVisible={open} title="Edit actor" className="modal-overlay">
          <AddEditActor
            btnPrimaryText="Update"
            openModal={(open) => setIsOpen(open)}
            actorDetails={details}
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
