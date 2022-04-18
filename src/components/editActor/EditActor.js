import { Title } from "../title/Title";
import { Field } from "../field/Field";
import { TextArea } from "../textarea/TextArea";
import { Button } from "../button/Button";

export const EditActor = () => {
  return (
    <div className="container">
      <Title className="edit-title-styles">Edit actor</Title>
      <div className="form-container">
        <Field type="text" value="name" className="text-label-add">
          Name
        </Field>
      </div>
      <div className="form-container">
        <Field
          type="text"
          value="occupation besides acting"
          className="text-label-add"
        >
          Principal job
        </Field>
      </div>
      <div className="form-container">
        <Field type="text" value="name" className="text-label-add">
          Hobbies
        </Field>
      </div>
      <div className="form-container">
        <TextArea
          id="description"
          name="description"
          maxLength="50"
          className="text-label-add"
          labelText="Description"
        ></TextArea>
      </div>
      <Button className=" new-actor-update-btn add-edit-btn">Update</Button>
      <Button className="changed-mind-btn">I changed my mind</Button>
    </div>
  );
};
