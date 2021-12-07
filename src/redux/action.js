import axios from "axios"


const getUser = () => async dispatch => {

    dispatch({
        type: "LOADING_USER"
    })

    try {
        const { data } = await axios.get("https://61ad9197d228a9001703ae3b.mockapi.io/detail");
        dispatch({
            type: "SUCCESS_USER",
            payload: data
        })

    } catch (err) {
        dispatch({
            type: "FAILED_USER",
            payload: err
        })

    }
}


const AddUser = (name) => async dispatch => {

    dispatch({
        type: "ADDING_USER"
    })

    try {
        await axios.post("https://61ad9197d228a9001703ae3b.mockapi.io/detail", { name: name });  // it will only add data to api 
        const { data: updatedList } = await axios.get(`https://61ad9197d228a9001703ae3b.mockapi.io/detail`); // return updated data with newly added data

        dispatch({
            type: "USER_ADDED",
            payload: updatedList
        })

    } catch (err) {
        dispatch({
            type: "FAILED_TO_ADD",
            payload: err
        })

    }
}


const RemoveUser = (id) => async dispatch => {

    dispatch({
        type: "REMOOVING_USER"
    })

    try {
        await axios.delete(`https://61ad9197d228a9001703ae3b.mockapi.io/detail/${id}`);   // it will remoove the data according to id
        const { data: updatedList } = await axios.get(`https://61ad9197d228a9001703ae3b.mockapi.io/detail`);  //it will return updated list after removing data 

        dispatch({
            type: "USER_REMOVED",
            payload: updatedList
        })

    } catch (err) {
        dispatch({
            type: "FAILED_TO_REMOVE",
            payload: err
        })

    }
}

const UpdateUser = (id, name) => async dispatch => {

    dispatch({
        type: "UPDATING_USER"
    })

    try {
        await axios.put(`https://61ad9197d228a9001703ae3b.mockapi.io/detail/${id}`, { name: name }); // it will only update data in api 
        const { data: updatedList } = await axios.get(`https://61ad9197d228a9001703ae3b.mockapi.io/detail`);  // return list after updatin user name 
        dispatch({
            type: "USER_UPDATED",
            payload: updatedList  // updated data will store into payload which will show in list
        })

    } catch (err) {
        dispatch({
            type: "FAILED_TO_UPDATE",
            payload: err
        })

    }
}






export { getUser, AddUser, RemoveUser, UpdateUser };

