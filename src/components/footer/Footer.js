import { Logo } from "../logo/Logo";
import "./Footer.css";

const Footer = () => {
  const getCurrentDate = () => {
    let today = new Date();
    let currentYear = today.getFullYear();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let currentMonth = months[today.getMonth()];
    let currentDay = today.getDate();
    let currentDate = `${currentDay} ${currentMonth} ${currentYear}`;

    return currentDate;
  };

  const date = getCurrentDate();

  return (
    <div className="footer">
      <p>{date}</p>
      <Logo className="footer-logo" text="ActoKedavra" />
    </div>
  );
};

export default Footer;
