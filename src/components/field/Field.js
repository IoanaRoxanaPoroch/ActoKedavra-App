import "./Field.css";

export const Field = ({ children, type, value, className }) => {
  return (
    <form action="" className={className}>
      <label htmlFor={value}>{children}</label>
      <input type={type} required />
    </form>
  );
};
