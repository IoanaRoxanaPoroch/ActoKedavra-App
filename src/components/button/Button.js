import "./Button.css";

export const Button = ({ children, className, onClick }) => {
  return <button className={className}>{children}</button>;
};
