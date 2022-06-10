import "./Field.css";
import { useState, useEffect } from "react";

export const Field = (props) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = () => {
    if (props.value?.length === 0) {
      setFocused(true);
    }
  };
  const [isChecked, setIsChecked] = useState(false);
  const [checkedInCard, setCheckedInCard] = useState(false);

  useEffect(() => {
    setCheckedInCard(props.valueOfChecked);
  }, [props.valueOfChecked]);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    setCheckedInCard(event.target.checked);
    if (props.actorsSelected) {
      props.actorsSelected(event.target.checked, event.target.id);
    }
  };

  return (
    <div className={props.className}>
      <label htmlFor={props.value} className="text-label">
        {props.children}
      </label>
      <input
        id={
          props.type === "text" && props.spanText && props.value.length === 0
            ? "required"
            : props.id
        }
        type={props.type}
        value={props.value}
        onChange={props.type === "text" ? props.onChange : handleChange}
        onClick={props.onClick}
        required
        onBlur={handleFocus}
        focused={focused.toString()}
        checked={props.valueOfChecked ? checkedInCard : isChecked}
      />
      <span
        className={
          props.spanText && props.value?.length === 0
            ? "span"
            : !props.spanText && props.value?.length === 0 && focused
            ? "span span-on-blur"
            : "span-none"
        }
      >
        {props.spanText}
      </span>
    </div>
  );
};
