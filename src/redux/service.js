
import axios from "axios"

const getALLName = async () => {
    const { data } = await axios.get("https://61ad9197d228a9001703ae3b.mockapi.io/detail");
    return data
}


const addName = async (name) => {
  await axios.post("https://61ad9197d228a9001703ae3b.mockapi.io/detail", { name: name });  // it will only add data to api 
}


const updateName = async (id, name) => {
    await axios.put(`https://61ad9197d228a9001703ae3b.mockapi.io/detail/${id}`, { name: name });
}


const deleteName = async (id) => {
    await axios.delete(`https://61ad9197d228a9001703ae3b.mockapi.io/detail/${id}`);   // it will remoove the data according to id
}


const userService = {
    getALLName, addName, updateName, deleteName
}

export default userService;

