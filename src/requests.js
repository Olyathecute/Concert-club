import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com'

export const getAllUsers = () => axios.get(`${URL}/users`).then(({ data }) => data)

export const getUsersPosts = () => axios.get(`${URL}/users/1/posts`).then(({ data }) => data)
