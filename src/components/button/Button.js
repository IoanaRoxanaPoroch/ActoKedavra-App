import "./Button.css";

export const Button = ({ children, type, ...rest }) => {
  const otherProps = { ...rest };

  //ar trebui sa verific daca acel atribut exista si apoi sa il apelez?
  return (
    <button
      className={`${type} ${otherProps.className}`}
      onClick={otherProps.onClick}
    >
      {children}
    </button>
  );
};
