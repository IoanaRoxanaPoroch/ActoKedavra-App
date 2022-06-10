import "./Button.css";

export const Button = ({ children, type, ...rest }) => {
  const otherProps = { ...rest };
  return (
    <button
      className={`${type} ${otherProps.className}`}
      onClick={otherProps.onClick}
    >
      {children}
    </button>
  );
};
