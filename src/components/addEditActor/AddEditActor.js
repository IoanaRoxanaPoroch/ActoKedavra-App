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
  onSubmit,
}) => {
  const defaultActor = {
    id: actorDetails ? actorDetails.id : "",
    name: actorDetails ? actorDetails.name : "",
    occupation: actorDetails ? actorDetails.occupation : "",
    hobbies: actorDetails ? actorDetails.hobbies : "",
    description: actorDetails ? actorDetails.description : "",
    characters: actorDetails ? actorDetails.description.length : 0,
  };
  const [actor, setActor] = useState(defaultActor);
  const [errorMessage, setErrorMessage] = useState({});

  const validate = () => {
    const errorMessage = "Field required";
    let errors = {};
    if (!actor.name) {
      errors.nameError = errorMessage;
    }
    if (!actor.occupation) {
      errors.occupationError = errorMessage;
    }
    if (!actor.hobbies) {
      errors.hobbiesError = errorMessage;
    }
    if (!actor.description) {
      errors.descriptionError = errorMessage;
    }
    if (
      errors.nameError ||
      errors.occupationError ||
      errors.hobbiesError ||
      errors.descriptionError
    ) {
      console.log(errors);
      setErrorMessage({ ...errors });
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    const isValid = validate();
    console.log("zzzz isValid ", isValid);
    if (validate()) {
      openModal(false);
      // onSubmit(actor);
      // setActor(defaultActor);
      updates(actor.id, actor);
    }
  };
  console.log("zzz zerr ", errorMessage);
  return (
    <form className="add-edit-actor">
      <Field
        type="text"
        className="add-edit-actor-group"
        value={actor.name}
        onChange={(e) => {
          setActor({ ...actor, name: e.target.value });
        }}
        spanText={errorMessage?.nameError}
      >
        Name
      </Field>

      <Field
        type="text"
        className="add-edit-actor-group"
        value={actor.occupation}
        onChange={(e) => setActor({ ...actor, occupation: e.target.value })}
        spanText={errorMessage?.occupationError}
      >
        Occupation besides acting
      </Field>

      <Field
        type="text"
        className="add-edit-actor-group"
        value={actor.hobbies}
        onChange={(e) => setActor({ ...actor, hobbies: e.target.value })}
        spanText={errorMessage?.hobbiesError}
      >
        Hobbies
      </Field>
      <TextArea
        className="add-edit-actor-group"
        name="description"
        maxLength="180"
        labelText="Description"
        value={actor.description}
        characters={actor?.characters}
        onChange={(e) =>
          setActor({
            ...actor,
            description: e.target.value,
            characters: e.target.value.length,
          })
        }
        spanText={errorMessage?.descriptionError}
      />
      <Button type="btn-primary" onClick={handleSubmit}>
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
