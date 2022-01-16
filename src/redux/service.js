
import axios from "axios"
import {baseUrl} from "./../config"

const getALLName = async () => {
    const { data } = await axios.get(baseUrl);
    return data
}


const addName = async (name) => {
  await axios.post(baseUrl, { name: name });  // it will only add data to api 
}


const updateName = async (id, name) => {
    await axios.put(`${baseUrl}${id}`, { name: name });
}


const deleteName = async (id) => {
    await axios.delete(`${baseUrl}${id}`);   // it will remoove the data according to id 
}


const userService = {
    getALLName, addName, updateName, deleteName
}

export default userService;

