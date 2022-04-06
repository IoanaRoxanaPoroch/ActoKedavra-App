import "./Card.css";
import { AiOutlineLike } from "react-icons/ai";
// import { Button } from "../button/Button";

export const Card = () => {
  return (
    <div className="card">
      <img
        src="https://static.cinemagia.ro/img/resize/db/actor/00/19/00/leonardo-dicaprio-291378l-600x0-w-53f4f492.jpg"
        alt="Leonardo Dicaprio"
        className="actor-img"
      />
      {/* imaginea trebuie sa fie dinamica */}
      <div className="job-likes">
        <p className="jobs">Actor & Writer</p>
        <p className="likes">
          47
          <AiOutlineLike />
        </p>
      </div>
      <div className="description">
        <p>
          Leonardo Wilhelm DiCaprio is an American actor and film producer.
          Known for his work in biopics and period films, he is the recipient of
          numerous accolades, including an Academy Award, a British Academy Film
          Award, and three Golden Globe Awards. As of 2019, his films have
          grossed over $7.2 billion worldwide, and he has been placed eight
          times in annual rankings of the world's highest-paid actors.
        </p>
      </div>
    </div>
  );
};
