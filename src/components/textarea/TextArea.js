import "./TextArea.css";

export const TextArea = ({
  className,
  name,
  maxLength,
  labelText,
  value,
  characters,
  onChange,
}) => {
  const message = () => {
    let result;
    if (characters > 180 || characters === 180) {
      result = 0;
    } else {
      result = 180 - characters;
    }
    return result;
  };
  const chars = message();

  return (
    <div className={className}>
      <label htmlFor={name} className="text-label">
        {labelText}
      </label>
        <textarea
          type="text"
          id={name}
          name={name}
          maxLength={maxLength}
          value={value}
          characters={characters}
          onChange={onChange}
          required
        ></textarea>
        <div className="chars-remained-text">
          <p>{chars} characters remained</p>
        </div>
      <span></span>
    </div>
  );
};
