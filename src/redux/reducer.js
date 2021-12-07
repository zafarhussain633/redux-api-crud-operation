const initialState = {
    loading: true,
    userList: []
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        //  for loading userlist
        case "LOADING_USER":
            return { loading: true, loadingText: "Loading User List from Api" }

        case "SUCCESS_USER":
            return { loading: false, userList: payload }

        case "FAILED_USER":
            return { loading: false, errMsg: payload }


        // for remooving item from user list 
        case "REMOOVING_USER":
            return { loading: true, loadingText: "Remooving User from Api" }

        case "USER_REMOVED":
            return { loading: false, userList: payload, }

        case "FAILED_TO_REMOVE":
            return { loading: false, errMsg: payload }


        //for adding item in user list 
        case "ADDING_USER":
            return { loading: true, loadingText: "Adding User to APi" }

        case "USER_ADDED":
            return { loading: false, userList: payload }

        case "FAILED_TO_ADD":
            return { loading: false, errMsg: payload }


        //for updating item into list 
        case "UPDATING_USER":
            return { loading: true, loadingText: "Updating data in APi" }

        case "USER_UPDATED":
            return { loading: false, userList: payload }

        case "FAILED_TO_UPDATE":
            return { loading: false, errMsg: payload }
            
        default:
            return state
    }
}



export { userReducer };
