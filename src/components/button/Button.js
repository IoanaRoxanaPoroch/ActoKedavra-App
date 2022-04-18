import "./Button.css";

export const Button = ({ children, className }) => {
  return <button className={className}>{children}</button>;
};
