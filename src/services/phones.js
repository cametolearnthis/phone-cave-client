import api from './api';

export const listPhones = () =>
  api.get('phones/').then((response) => response.data);

export const singlePhone = (id) =>
  api.get(`phones/${id}`).then((response) => response.data);