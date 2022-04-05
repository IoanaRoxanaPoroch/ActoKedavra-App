import "./App.css";
import Actor from "./components/actor/Actor";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  const actor = {
    name: "Leonardo Dicaprio",
    score: 10,
    hobbies: "Music and dancing naked in the rain",
    description: "He is a good guy with a thick mustache",
  };
  return (
    <div className="App">
      <Header />
      <Actor actor={actor} />
      <Footer />
    </div>
  );
}

export default App;
