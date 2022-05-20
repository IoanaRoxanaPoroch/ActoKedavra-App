import "./TextArea.css";
import { useState } from "react";

export const TextArea = ({
  className,
  name,
  maxLength,
  labelText,
  value,
  characters,
  onChange,
  spanText,
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
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };
  console.log("spanText", spanText);
  return (
    <div className={className}>
      <label htmlFor={name} className="text-label">
        {labelText}
      </label>
      <textarea
        type="text"
        id={spanText && value.length === 0 ? "required" : ""}
        name={name}
        maxLength={maxLength}
        value={value}
        characters={characters}
        onChange={onChange}
        required
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <div
        className={
          (spanText && value.length === 0) || focused === true
            ? "chars-remained-text chars-remaind-text-required"
            : "chars-remained-text"
        }
      >
        <p>{chars} characters remained</p>
      </div>
      <span
        className={
          spanText && value.length === 0
            ? "span"
            : !spanText && value.length === 0 && focused
            ? " span span-on-blur"
            : " span-none"
        }
      >
        {spanText}
      </span>
    </div>
  );
};
