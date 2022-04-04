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

export default Actor;

