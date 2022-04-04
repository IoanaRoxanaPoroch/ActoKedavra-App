import "./App.css";
import Actor from "./components/actor/Actor";

function App() {
  const actor = {
    name: "Leonardo Dicaprio",
    score: 10,
    hobbies: "Music and dancing naked in the rain",
    description: "He is a good guy with a thick mustache",
  };
  return (
    <div className="App">
      <Actor actor={actor} />
    </div>
  );
}

export default App;
