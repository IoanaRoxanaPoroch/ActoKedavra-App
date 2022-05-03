import "./Field.css";

export const Field = ({ children, type, value, className, onChange }) => {
  return (
    <form action="" className={className}>
      <label htmlFor={value}>{children}</label>
      <input type={type} value={value} onChange={onChange} required />
      <span></span>
    </form>
  );
};
