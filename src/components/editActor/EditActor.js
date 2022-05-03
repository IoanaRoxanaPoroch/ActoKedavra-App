import { Field } from "../field/Field";
import { TextArea } from "../textarea/TextArea";
import { Button } from "../button/Button";

export const EditActor = ({btn}) => {
  return (
    <div className="container">
      <div className="form-container">
        <Field type="text" value="name" className="text-label">
          Name
        </Field>
      </div>
      <div className="form-container">
        <Field
          type="text"
          value="occupation besides acting"
          className="text-label"
        >
          Principal job
        </Field>
      </div>
      <div className="form-container">
        <Field type="text" value="name" className="text-label">
          Hobbies
        </Field>
      </div>
      <div className="form-container">
        <TextArea
          id="description"
          name="description"
          maxLength="50"
          className="text-label"
          labelText="Description"
        ></TextArea>
      </div>
      <Button type="btn-type-3">Update</Button>
      <Button className="changed-mind-btn">I changed my mind</Button>
    </div>
  );
};
