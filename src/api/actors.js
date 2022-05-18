import axios from "axios";

export const getActors = async (id) => {
  return await axios.get(
    `${process.env.REACT_APP_API_URL}/actors/${id ? id : ""}`
  );
};


// const getActorById = async (id) => {
//     return await axios.get(`http://localhost:3000/actors/${id}`);
//   };
