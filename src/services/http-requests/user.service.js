import {get, put, deleteItem} from './axios.instance';

export const getUserBoard = () => get('users/auth/me');

export const getUserById = id => get(`users/${id}`);

export const getUsers = () => get('users');

export const updateUser = (id, body) => put(`users/${id}`, body);

export const deleteUser = id => deleteItem(`users/${id}`);