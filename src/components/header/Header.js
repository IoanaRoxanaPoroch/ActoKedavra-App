import { Logo } from "../logo/Logo";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Logo className="header-logo" />
    </div>
  );
};

export default Header;
