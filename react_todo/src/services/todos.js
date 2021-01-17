import axios from 'axios';

const baseUrl = 'http://localhost:3001/todos';

//get todo
const getAll = async() => {
    const response = await axios.get(baseUrl);
    return response.data;
};

//update todo
const update = async(id, newTodo) => {
    const response = await axios.put(`${baseUrl}/${id}`, newTodo);
    return response.data;
};

//delete todo
const _delete = async id => {
    await axios.delete(`${baseUrl}/${id}`);
    return id;
}

//add todo
const add= async newTodo => {
    const response = await axios.post(baseUrl, newTodo);
    return response.data;
}

export default {getAll, update, delete:_delete, add};