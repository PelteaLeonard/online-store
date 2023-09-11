import { useState } from "react";
import { AddReviewButton, CloseIcon, Form, Modal, TextField, TextFieldsContainer, Title } from "./styles";

function AddModal(props) {
  const { open, handleClose } = props;

  const [bookName, setBookName] = useState("");
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleChangeBookName = (event) => {
    setBookName(event.target.value);
  };

  const handleChangeUserName = (event) => {
    setUserName(event.target.value);
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Form>
        <Title>Add review</Title>
        <TextFieldsContainer>
        <TextField
          size="small"
          id="bookName"
          label="Book Name"
          placeholder="Add book name..."
          value={bookName}
          onChange={handleChangeBookName}
        />
        <TextField
          size="small"
          id="username"
          label="User Name"
          placeholder="Add user name..."
          value={userName}
          onChange={handleChangeUserName}
        />
        <TextField
          size="small"
          id="title"
          label="Title"
          placeholder="Add title..."
          value={title}
          onChange={handleChangeTitle}
        />
        <TextField
          size="small"
          id="text"
          label="Text"
          placeholder="Add text..."
          value={text}
          onChange={handleChangeText}
        />
        </TextFieldsContainer>
        <AddReviewButton>Add review</AddReviewButton>
        <CloseIcon onClick={handleClose} />
      </Form>
     
    </Modal>
  );
}

export default AddModal;
