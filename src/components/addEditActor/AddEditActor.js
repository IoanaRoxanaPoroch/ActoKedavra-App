import { Field } from "../field/Field";
import { TextArea } from "../textarea/TextArea";
import "./AddEditActor.css";
import { Button } from "../button/Button";
import { useState } from "react";

export const AddEditActor = ({
  btnPrimaryText,
  openModal,
  actorDetails,
  updates,
}) => {
  const [actor, setActor] = useState({
    id: actorDetails ? actorDetails.id : "",
    name: actorDetails ? actorDetails.name : "",
    occupation: actorDetails ? actorDetails.occupation : "",
    hobbies: actorDetails ? actorDetails.hobbies : "",
    description: actorDetails ? actorDetails.description: "",
    characters: actorDetails ? actorDetails.description.length : 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="add-edit-actor">
      <Field
        type="text"
        className="add-edit-actor-group"
        value={actor.name}
        onChange={(e) => setActor({ ...actor, name: e.target.value })}
      >
        Name
      </Field>

      <Field
        type="text"
        className="add-edit-actor-group"
        value={actor.occupation}
        onChange={(e) => setActor({ ...actor, occupation: e.target.value })}
      >
        Occupation besides acting
      </Field>

      <Field
        type="text"
        className="add-edit-actor-group"
        value={actor.hobbies}
        onChange={(e) => setActor({ ...actor, hobbies: e.target.value })}
      >
        Hobbies
      </Field>
      <TextArea
        className="add-edit-actor-group"
        name="description"
        maxLength="180"
        labelText="Description"
        value={actor.description}
        characters={actor.characters}
        onChange={(e) =>
          setActor({
            ...actor,
            description: e.target.value,
            characters: e.target.value.length,
          })
        }
      />
      <Button
        type="btn-primary"
        onClick={() => {
          updates(actor.id, actor);
          openModal(false);
        }}
      >
        {btnPrimaryText}
      </Button>
      <Button
        className="changed-mind-btn add-edit-actor-changed-mind-btn"
        onClick={() => {
          openModal(false);
        }}
      >
        I changed my mind
      </Button>
    </form>
  );
};
