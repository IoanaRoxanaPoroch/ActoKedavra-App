import "./Title.css";

export const Title = ({ children, className }) => {
  console.log("in title cmp", children);
  return (
    <div className="title">
      <p className={className}>{children}</p>
    </div>
  );
};
