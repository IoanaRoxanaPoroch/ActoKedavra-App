import "./Field.css";
import { useState } from "react";

export const Field = ({
  className,
  value,
  children,
  type,
  onChange,
  spanText,
  onClick,
}) => {
  console.log("zzzz spanText", spanText);
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
        id={spanText && value.length === 0 ? "required" : ""}
        type={type}
        value={value}
        onChange={onChange}
        onClick={onClick}
        required
        onBlur={handleFocus}
        focused={focused.toString()}
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
