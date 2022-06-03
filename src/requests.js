import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com'

export const getAllUsers = () => axios.get(`${URL}/users`).then(({ data }) => data)
