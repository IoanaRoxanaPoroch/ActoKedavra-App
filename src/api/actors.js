import axios from 'axios'

const { REACT_APP_API_URL } = process.env

export const getActors = async (id) => {
  return await axios.get(`${REACT_APP_API_URL}/actors${id ? `/${id}` : ''}`)
}

export const addNewActor = async (actor) => {
  return await axios.post(`${REACT_APP_API_URL}/actors`, actor)
}

export const deleteActor = async (actor) => {
  return await axios.delete(`${REACT_APP_API_URL}/actors/${actor.id}`, actor)
}

export const updateActor = async (actor) => {
  return await axios.put(`${REACT_APP_API_URL}/actors/${actor.id}`, actor)
}
