import { Logo } from "../logo/Logo";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Logo className="header-logo" text="ActoKedavra" />
    </header>
  );
};

export default Header;
