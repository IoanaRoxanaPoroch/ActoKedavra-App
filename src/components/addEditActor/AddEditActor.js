import { Field } from "../field/Field";
import { TextArea } from "../textarea/TextArea";
import "./AddEditActor.css";
import { Button } from "../button/Button";
import { useState } from "react";

export const AddEditActor = ({ btnPrimaryText, openModal, actorDetails }) => {
  const [name, setName] = useState(actorDetails?.name);

  const handleSubmit = () => {
    console.log(name);
  };

  return (
    <div className="add-actor">
      <div className="add-acto-group">
        <Field
          type="text"
          value={name}
          defaultValue={actorDetails?.name}
          className="text-label"
          onChange={(e) => setName(e.target.value)}
        >
          Name
        </Field>
      </div>
      <div className="add-acto-group">
        <Field type="text" value={actorDetails?.jobs} className="text-label">
          Occupation besides acting
        </Field>
      </div>
      <div className="add-acto-group">
        <Field type="text" value={actorDetails?.hobbies} className="text-label">
          Hobbies
        </Field>
      </div>
      <div className="add-acto-group">
        <TextArea
          id="description"
          name="description"
          maxLength="50"
          className="text-label"
          labelText="Description"
          value={actorDetails?.description}
        ></TextArea>
      </div>
      <Button type="btn-primary" onClick={handleSubmit}>
        {btnPrimaryText}
      </Button>
      <Button
        className="changed-mind-btn btn-positioning"
        onClick={() => openModal(false)}
      >
        I changed my mind
      </Button>
    </div>
  );
};
