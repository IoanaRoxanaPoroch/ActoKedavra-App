import "./Logo.css";

export const Logo = ({ className, text }) => {
  return (
    <div>
      <p className={`logo ${className}`}>{text}</p>
    </div>
  );
};
