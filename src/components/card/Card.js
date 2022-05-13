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
import { Field } from "../field/Field";

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
  const [isVisible, setIsVisible] = useState(false);

  const onClickOpen = () => {
    setIsOpen(true);
  };

  const displayCheckBox = () => {
    setIsVisible(true);
  };

  return (
    <div className="card">
      <div className="card-close-btn-wrapper">
        <Button
          type="close-btn"
          className="card-close-btn"
          onClick={() => {
            updates(id);
          }}
        >
          <VscClose />
        </Button>
      </div>
      {isVisible && <Field type="checkbox"></Field>}
      <img src={sourceImage} alt={textImage} className="card-actor-img" />
      <Title className="card-title">{name}</Title>
      <div className="card-job-likes-wrapper">
        <p className="card-jobs">{occupation}</p>
        <p className="card-likes">
          {likes}
          <AiOutlineLike />
        </p>
      </div>
      <div className="card-tags">
        {hobbiesReceived.hobbies?.map((hobbie, index) => (
          <Tag key={index}>{hobbie}</Tag>
        ))}
      </div>
      <div className="card-description">
        <Content text={description} />
      </div>
      <Button type="btn-type-2" className="card-edit-btn" onClick={onClickOpen}>
        Edit
        <MdOutlineModeEdit className="edit-icon" />
      </Button>
      {open && (
        <Modal
          className="modal-overlay"
          openModal={(open) => setIsOpen(open)}
          title="Edit actor"
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
