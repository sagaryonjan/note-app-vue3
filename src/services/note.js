import axios from "axios";

const API_URL = 'http://localhost:8000';

export const fetchNotes = () => {
  return axios.get(`${API_URL}/api/notes`);
};

export const fetchNoteById = (id) => {
  return axios.get(`${API_URL}/api/notes/${id}`);
};


export const createNote = (data) => {
  return axios.post(`${API_URL}/api/notes`, data);
};


export const deleteNote = (id) => {
  return axios.delete(`${API_URL}/api/notes/${id}`);
};

export const updateNote = (id, data) => axios.patch(`${API_URL}/api/notes/${id}`, data);


