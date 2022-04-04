import PropTypes from "prop-types";

const Actor = ({ actor }) => {
  const listItems = Object.keys(actor).map((key) => (
    <li key={key}>{actor[key]}</li>
  ));

  return (
    <div>
      <div className="actor">
        <ul>{listItems}</ul>
      </div>
    </div>
  );
};

Actor.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  hobbies: PropTypes.string,
  description: PropTypes.string,
};

export default Actor;
