import "./Title.css";

export const Title = ({ children, className }) => {
  return (
    <div className="title">
      <p className={className}>{children}</p>
    </div>
  );
};
