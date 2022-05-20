import "./Field.css";
import { useState, useEffect } from "react";

export const Field = ({
  id,
  className,
  value,
  children,
  type,
  onChange,
  spanText,
  onClick,
  valueOfChecked,
  actorsSelected,
}) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = () => {
    if (value.length === 0) {
      setFocused(true);
    }
  };
  const [isChecked, setIsChecked] = useState(false);
  const [checkedInCard, setCheckedInCard] = useState(false);

  useEffect(() => {
    setCheckedInCard(valueOfChecked);
  }, [valueOfChecked]);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    setCheckedInCard(event.target.checked);
    if (actorsSelected) {
      actorsSelected(event.target.checked, event.target.id);
      // console.log("test", event.target.id);
    }
  };

  return (
    <div className={className}>
      <label htmlFor={value} className="text-label">
        {children}
      </label>
      <input
        id={type === "text" && spanText && value.length === 0 ? "required" : id}
        type={type}
        value={value}
        onChange={type === "text" ? onChange : handleChange}
        onClick={onClick}
        required
        onBlur={handleFocus}
        focused={focused.toString()}
        checked={valueOfChecked ? checkedInCard : isChecked}
      />
      <span
        className={
          spanText && value?.length === 0
            ? "span"
            : !spanText && value?.length === 0 && focused
            ? "span span-on-blur"
            : "span-none"
        }
      >
        {spanText}
      </span>
    </div>
  );
};
