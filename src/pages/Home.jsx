import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "./../redux/action";
import UserList from "../components/UserList";
import AddUserModal from "./../components/AddUserModal";
import LoadingSpinner from "./../components/LoadingSpinner";

const Home = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  if (userData.loading) {
    return (
      <>
        <h2>{userData.loadingText}</h2>
        <LoadingSpinner />
      </>
    );
  }

  return (
    <div>
      <h2>Crud operation using Axios and redux </h2>
      {userData.userList.map((res) => (
        <div key={res.id}>
          <UserList id={res.id} name={res.name} />
        </div>
      ))}
      <div className="addbutton">
        <button onClick={() => setOpen(!open)}>Add User</button>
        <AddUserModal isModelOPen={open} closeModal={() => setOpen(!open)} />
      </div>
    </div>
  );
};

export default Home;
