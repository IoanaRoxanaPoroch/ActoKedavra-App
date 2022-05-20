import axios from "axios";

export const getActors = async (id) => {
  return await axios.get(
    `${process.env.REACT_APP_API_URL}/actors/${id ? id : ""}`
  );
};

export const addNewActor = async (actor) => {
  return await axios.post(`${process.env.REACT_APP_API_URL}/actors`, actor);
};

export const deleteActor = async (actor) => {
  return await axios.delete(
    `${process.env.REACT_APP_API_URL}/actors/${actor.id}`,
    actor
  );
};

export const updateActor = async (actor) => {
  return await axios.put(
    `${process.env.REACT_APP_API_URL}/actors/${actor.id}`,
    actor
  );
};
