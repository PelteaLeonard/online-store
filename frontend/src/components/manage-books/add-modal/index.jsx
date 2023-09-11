import {
  AddBookButton,
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

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const handleChangePublisher = (event) => {
    setPublisher(event.target.value);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Form>
        <Title>Add book</Title>
        <TextFieldsContainer>
          <TextField
            size="small"
            id="name"
            label="Name"
            placeholder="Add name..."
            value={name}
            onChange={handleChangeName}
          />
          <TextField
            size="small"
            id="description"
            label="Description"
            placeholder="Add description..."
            value={description}
            onChange={handleChangeDescription}
          />
          <TextField
            size="small"
            id="price"
            label="Price"
            placeholder="Add price..."
            value={price}
            onChange={handleChangePrice}
          />
          <TextField
            size="small"
            id="category"
            label="Category"
            placeholder="Add category..."
            value={category}
            onChange={handleChangeCategory}
          />
          <TextField
            size="small"
            id="author"
            label="Author"
            placeholder="Add author..."
            value={author}
            onChange={handleChangeAuthor}
          />
          <TextField
            size="small"
            id="publisher"
            label="Publisher"
            placeholder="Add publisher..."
            value={publisher}
            onChange={handleChangePublisher}
          />
        </TextFieldsContainer>
        <AddBookButton>Add book</AddBookButton>
        <CloseIcon onClick={handleClose} />
      </Form>
    </Modal>
  );
}

export default AddModal;
