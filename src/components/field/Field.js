import "./Field.css";

export const Field = ({
  value,
  className,
  children,
  type,
  onChange,
  onClick,
}) => {
  return (
    <div className={className}>
      <label htmlFor={value} className="text-label">
        {children}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onClick={onClick}
        required
      />
      <span></span>
    </div>
  );
};
