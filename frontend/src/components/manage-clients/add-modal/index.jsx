import {
  AddClientButton,
  CloseIcon,
  Form,
  Modal,
  TextField,
  TextFieldsContainer,
  Title,
} from "./styles";
import { useState } from "react";

function AddModal(props) {
  const { open, handleClose } = props;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Form>
        <Title>Add client</Title>
        <TextFieldsContainer>
          <TextField
            size="small"
            id="firstName"
            label="First Name"
            placeholder="Add first name..."
            value={firstName}
            onChange={handleChangeFirstName}
          />
          <TextField
            size="small"
            id="lastName"
            label="Last Name"
            placeholder="Add Last name..."
            value={lastName}
            onChange={handleChangeLastName}
          />
          <TextField
            size="small"
            id="email"
            label="Email"
            placeholder="Add email..."
            type="email"
            value={email}
            onChange={handleChangeEmail}
          />
          <TextField
            size="small"
            id="password"
            label="Password"
            type="password"
            placeholder="Add password..."
            value={password}
            onChange={handleChangePassword}
          />
        </TextFieldsContainer>
        <AddClientButton>Add client</AddClientButton>
        <CloseIcon onClick={handleClose} />
      </Form>
    </Modal>
  );
}

export default AddModal;
