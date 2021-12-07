import userService from "./service"
import constants from "./constant"


const getUser = () => async dispatch => {

    dispatch({
        type: constants.LOADING_USER
    })

    try {
        const nameList = await userService.getALLName();
        dispatch({
            type: constants.SUCCESS_USER,
            payload: nameList
        })

    } catch (err) {
        dispatch({
            type: constants.FAILED_USER,
            payload: err
        })

    }
}


const AddUser = (name) => async dispatch => {

    dispatch({
        type: constants.ADDING_USER
    })

    try {
        await userService.addName(name)
        const nameList = await userService.getALLName(); // nameList after adding

        dispatch({
            type: constants.USER_ADDED,
            payload: nameList
        })

    } catch (err) {
        dispatch({
            type: constants.FAILED_TO_ADD,
            payload: err
        })

    }
}


const RemoveUser = (id) => async dispatch => {

    dispatch({
        type: constants.REMOOVING_USER
    })
    
    try {
        await userService.deleteName(id);
        const nameList = await userService.getALLName(); // nameList after removing

        dispatch({
            type: constants.USER_REMOVED,
            payload: nameList
        })

    } catch (err) {
        dispatch({
            type: constants.FAILED_TO_REMOVE,
            payload: err
        })

    }
}

const UpdateUser = (id, name) => async dispatch => {

    dispatch({
        type: constants.UPDATING_USER
    })

    try {

        await userService.updateName(id, name);  // it will only update data in api 
        const nameList = await userService.getALLName(); // nameList after updating
        dispatch({
            type: constants.USER_UPDATED,
            payload: nameList  // updated data will store into payload which will show in list
        })

    } catch (err) {
        dispatch({
            type: constants.FAILED_TO_UPDATE,
            payload: err
        })

    }
}






export { getUser, AddUser, RemoveUser, UpdateUser };

