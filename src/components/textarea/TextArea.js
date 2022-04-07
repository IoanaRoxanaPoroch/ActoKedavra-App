import "./TextArea.css";

export const TextArea = ({ id, name, maxLength, labelText, className }) => {
  return (
    <form action="">
      <label htmlFor="" className={className}>
        {labelText}
      </label>
      <textarea
        id={id}
        name={name}
        maxLength={maxLength}
        placeholder="number of characters remained"
        required
      ></textarea>
      <span></span>
    </form>
  );
};
