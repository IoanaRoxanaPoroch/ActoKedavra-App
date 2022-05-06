import { useState } from "react";
import { Button } from "../button/Button";
import { IoIosArrowForward } from "react-icons/io";
import "./ReadMore.css";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="read-more-read-less-wrapper">
      {isReadMore ? `${text?.slice(0, 50)}...` : text}
      <span onClick={toggleReadMore}>
        {isReadMore ? (
          <Button type="read-more-read-less-btn">
            Read more
            <IoIosArrowForward className="more-arrow" />
          </Button>
        ) : (
          <Button className="read-more-read-less-btn">
            Read less
            <IoIosArrowForward className="less-arrow" />
          </Button>
        )}
      </span>
    </div>
  );
};

const Content = ({ text }) => {
  return <ReadMore>{text}</ReadMore>;
};

export default Content;
