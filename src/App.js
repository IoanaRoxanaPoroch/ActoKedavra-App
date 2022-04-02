import "./App.css";

function App() {
  const actor = {
    name: "Leornardo Dicaprio",
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
    <div className="App">
      <div className="actor">
        <ul>{listItems}</ul>
        {/* <ul>{listItems1}</ul> */}
      </div>
    </div>
  );
}

export default App;
