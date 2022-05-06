import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StyleGuidepage from "./components/styleGuide/StyleGuidepage";
import Home from "./components/home/Home";

function App() {
  const actor = {
    name: "Leonardo Dicaprio",
    score: 10,
    hobbies: "Music and dancing naked in the rain",
    description: "He is a good guy with a thick mustache",
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/styleguide" element={<StyleGuidepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
