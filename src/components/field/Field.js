import "./Field.css";

export const Field = ({ children, type, value, className, onChange }) => {
  return (
    <div className={className}>
      <label htmlFor={value}>{children}</label>
      <input type={type} value={value} onChange={onChange} required />
      <span></span>
    </div>
  );
};
