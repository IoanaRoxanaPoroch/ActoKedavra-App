import "./App.css";

function App() {
  const actor = {
    name: "Leornardo Dicaprio",
    score: 10,
    hobbies: "Music and dancing naked in the rain",
    description: "He is a good guy with a thick mustache",
  };
  const arr = [1, 2, 3, 4];
  return (
    <div className="App">
      <div className="actor">
        <ul>
          {/* {for(const prop in actor)
            {
              <li>
                {`${prop}:${actor[prop]}`}
              </li>
            }} */}
        </ul>
      </div>
    </div>
  );
}

export default App;
