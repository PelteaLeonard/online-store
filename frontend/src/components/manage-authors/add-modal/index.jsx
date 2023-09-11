import {
  AddAuthorButton,
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
  const [description, setDescription] = useState("");

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Form>
        <Title>Add author</Title>
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
            id="description"
            label="Description"
            placeholder="Add Description..."
            value={description}
            onChange={handleChangeDescription}
          />
        </TextFieldsContainer>
        <AddAuthorButton>Add author</AddAuthorButton>
        <CloseIcon onClick={handleClose} />
      </Form>
    </Modal>
  );
}

export default AddModal;
