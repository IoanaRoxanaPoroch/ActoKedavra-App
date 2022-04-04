const Actor = () => {
  const actor = {
    name: "Leonardo Dicaprio",
    score: 10,
    hobbies: "Music and dancing naked in the rain",
    description: "He is a good guy with a thick mustache",
  };

  const listItems = Object.keys(actor).map((key) => (
    <li key={key}>{actor[key]}</li>
  ));

  // let listItems1 = [];
  // for (const [key, value] of Object.entries(actor)) {
  //   listItems1.push(<li key={key}>{value}</li>);
  // }

  return (
    <div>
      <div className="actor">
        <ul>{listItems}</ul>
      </div>
    </div>
  );
};

export default Actor;
