import { useState, createContext } from "react"
import { useDispatch } from 'react-redux';
import { RemoveUser } from "./../redux/action";
import UpdateUserComp from "./UpdateUserComp";


export const ShowUpdateContext = createContext();
const UserList = ({ id, name }) => {

    const [showUpdateComp, setshowUpdateComp] = useState(false);
    const dispatch = useDispatch();
    function handleDelete(id) {
        dispatch(RemoveUser(id));
    }

    function handleUpdate() {

        setshowUpdateComp(!showUpdateComp);

    }

    return (
        <>
            <div key={id} className="user-info">
                <h3>{name}</h3>
                <div>
                    <button className="updateButton" onClick={handleUpdate}>update</button>
                    <button className="deleteButton" onClick={() => handleDelete(id)}>delete</button>
                </div>
            </div>

            <ShowUpdateContext.Provider value={[showUpdateComp, setshowUpdateComp]} >
                <UpdateUserComp idForUpdate={id} name={name}/>
            </ShowUpdateContext.Provider >

        </>

    )
}

export default UserList
