import "./TextArea.css";

export const TextArea = ({ id, name, maxlength, children, className }) => {
  return (
    <form action="">
      <label htmlFor="" className={className}>
        Short description
      </label>
      <textarea
        id={id}
        name={name}
        maxLength={maxlength}
        required
        placeholder="number of characters remained"
      >
        {children}
      </textarea>
    </form>
  );
};
