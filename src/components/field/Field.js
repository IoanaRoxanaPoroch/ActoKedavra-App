import "./Field.css";
import { useState } from "react";

// const style = {
//   ":checked:before": {
//     border: "solid var(--white)",
//     borderWidth: "0 2px 2px 0",
//     content: "",
//     display: "block",
//     transform: "rotate(45deg)",
//   },
// };

export const Field = ({
  className,
  value,
  children,
  type,
  onChange,
  spanText,
  onClick,
  classNameChecked,
}) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className={className}>
      <label htmlFor={value} className="text-label">
        {children}
      </label>
      <input
        id={
          type === "text" && spanText && value.length === 0
            ? "required"
            : // : type === "checkbox" && classNameChecked
              // ? "checked"
              ""
        }
        type={type}
        value={value}
        checked={classNameChecked}
        onChange={onChange}
        onClick={onClick}
        required
        onBlur={handleFocus}
        focused={focused.toString()}
        // style={classNameChecked && style}
      />
      <span
        className={
          spanText && value.length === 0
            ? "span"
            : !spanText && value.length === 0 && focused
            ? "span span-on-blur"
            : "span-none"
        }
      >
        {spanText}
      </span>
    </div>
  );
};
