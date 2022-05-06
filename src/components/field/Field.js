import "./Field.css";

export const Field = ({ value, className, children, type, onChange }) => {
  return (
    <div className={className}>
      <label htmlFor={value} className="text-label">
        {children}
      </label>
      <input type={type} value={value} onChange={onChange} required />
      <span></span>
    </div>
  );
};
