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
    id: actorDetails?.id,
    name: actorDetails?.name,
    occupation: actorDetails?.occupation,
    hobbies: actorDetails?.hobbies,
    description: actorDetails?.description,
    characters: actorDetails?.description.length,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    openModal(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="add-actor">
        <div className="add-acto-group">
          <Field
            className="text-label"
            type="text"
            value={actor.name}
            onChange={(e) => setActor({ ...actor, name: e.target.value })}
          >
            Name
          </Field>
        </div>
        <div className="add-acto-group">
          <Field
            className="text-label"
            type="text"
            value={actor.occupation}
            onChange={(e) => setActor({ ...actor, occupation: e.target.value })}
          >
            Occupation besides acting
          </Field>
        </div>
        <div className="add-acto-group">
          <Field
            className="text-label"
            type="text"
            value={actor.hobbies}
            onChange={(e) => setActor({ ...actor, hobbies: e.target.value })}
          >
            Hobbies
          </Field>
        </div>
        <div className="add-acto-group">
          <TextArea
            className="text-label"
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
        </div>
        <Button
          type="btn-primary"
          onClick={() => {
            updates(actor.id, actor);
          }}
        >
          {btnPrimaryText}
        </Button>
        <Button
          className="changed-mind-btn btn-positioning"
          onClick={() => {
            openModal(false);
          }}
        >
          I changed my mind
        </Button>
      </div>
    </form>
  );
};
