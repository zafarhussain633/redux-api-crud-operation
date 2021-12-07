import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AddUser } from "./../redux/action";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddUserModal({ isModelOPen, closeModal }) {
  const dispatch = useDispatch();

  const temp = isModelOPen;
  const [open, setOpen] = React.useState(temp);
  const [userInput, setUserInput] = useState("");

  function handleAddUser() {
    closeModal();
    dispatch(AddUser(userInput));
  }

  useEffect(() => {
    setOpen(temp);
  }, [isModelOPen, temp]);

  return (
    <div>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button onClick={closeModal}>
            <CloseIcon />
          </Button>

          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter User full Name
          </Typography>
          <div style={{ textAlign: "center" }}>
            <form action="">
              <input
                required="required"
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <button onClick={handleAddUser}>Add User</button>
            </form>
          </div>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
