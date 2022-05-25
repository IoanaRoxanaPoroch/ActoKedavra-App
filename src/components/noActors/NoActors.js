import { Button } from "../button/Button";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "./NoActors.css";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { useState } from "react";
import { Modal } from "../modal/Modal";
import { AddEditActor } from "../addEditActor/AddEditActor";

export const NoActors = ({ mainText, updates }) => {
  const [openAdd, setOpenAdd] = useState(false);

  return (
    <div className="no-actors">
      <Header />
      <div className="no-actors-content-wrapper">
        <HiOutlineEmojiSad className="no-actors-sad-icon" />
        <p>{mainText}</p>
        <div className="no-actors-btn-wrapper">
          <Button
            type="btn-primary"
            className="no-actors-add-actor-btn"
            onClick={() => {
              setOpenAdd(true);
            }}
          >
            Add new actor
          </Button>
          {openAdd && (
            <Modal
              className="modal-overlay add-edit-actor-type"
              openModal={(open) => setOpenAdd(open)}
              title="Add new actor"
            >
              <AddEditActor
                btnPrimaryText="Add new actor"
                openModal={(openAdd) => setOpenAdd(openAdd)}
                actorDetails={false}
                updates={updates}
              />
              {/* datele din modal? */}
            </Modal>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
