import { useContext, useState } from 'react'
import { useDispatch } from "react-redux"
import { ShowUpdateContext } from "./UserList"
import { UpdateUser } from "../redux/action"

const UpdateUserComp = ({ idForUpdate, name }) => {

    const dispatch = useDispatch();
    // const state = useSelector(state => state.userReducer)
    const [showUpdateComp, setshowUpdateComp] = useContext(ShowUpdateContext);
    const [inpuValue, setInValue] = useState("");

    function handleProcessForUpdate() {
        if (inpuValue.length > 1) {
            dispatch(UpdateUser(idForUpdate, inpuValue))
            setshowUpdateComp(!showUpdateComp)
        }
    }

    return (

        showUpdateComp ? (
            <div className="updateInputField">
                <h2>Update your name</h2>
                <p>Your current Name is: <b>{name}</b></p>
                <form>
                    <input value={inpuValue} required placeholder="Enter New Name" onChange={(e) => setInValue(e.target.value)} type="text"></input>
                    <button className="process-update" type="submit" onClick={handleProcessForUpdate}>Process to update</button>
                </form>
            </div>

        ) : ""

    )
}

export default UpdateUserComp
