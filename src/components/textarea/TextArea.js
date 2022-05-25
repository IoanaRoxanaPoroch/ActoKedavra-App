import "./TextArea.css";
import { useState } from "react";

export const TextArea = (props) => {
  const message = () => {
    let result;
    if (props.characters > 180 || props.characters === 180) {
      result = 0;
    } else {
      result = 180 - props.characters;
    }
    return result;
  };
  const chars = message();
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    if (props.value.length === 0) setFocused(true);
  };

  return (
    <div className={props.className}>
      <label className="text-label">{props.labelText}</label>
      <textarea
        type="text"
        id={props.spanText && props.value.length === 0 ? "required" : ""}
        name={props.name}
        maxLength={props.maxLength}
        value={props.value}
        characters={props.characters}
        onChange={props.onChange}
        required
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <div
        className={
          (props.spanText && props.value.length === 0) || focused
            ? "chars-remained-text chars-remaind-text-required"
            : "chars-remained-text"
        }
      >
        <p>{chars} characters remained</p>
      </div>
      <span
        className={
          props.spanText && props.value.length === 0
            ? "span"
            : !props.spanText && props.value.length === 0 && focused
            ? " span span-on-blur"
            : " span-none"
        }
      >
        {props.spanText}
      </span>
    </div>
  );
};
