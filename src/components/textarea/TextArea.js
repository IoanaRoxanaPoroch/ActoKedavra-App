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
    <div>
      <label htmlFor={name} className={className}>
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
      <p className="chars-remained-text">{chars} characters remained</p>
      <span></span>
    </div>
  );
};
