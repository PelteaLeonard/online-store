import MuiModal from "@mui/material/Modal";
import { Close } from "@mui/icons-material";
import MuiTextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

export const Modal = styled(MuiModal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Form = styled("form")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#fff",
  width: "500px",
  padding: "40px 50px",
  gap: "20px",
});

export const Title = styled("h2")({
  fontSize: "24px",
  fontWeight: "600",
  margin: "0",
  marginBottom: "20px",
});

export const TextFieldsContainer = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "15px"
});

export const TextField = styled(MuiTextField)({
  width: "100%",
});

export const AddBookButton = styled("button")({
    border: "none",
    fontSize: "13px",
    backgroundColor: "#b224b3",
    padding: "10px 36px",
    borderRadius: "4px",
    color: "#fff",
    fontWeight: "600",
    transition: "background-color .5s",
    ":hover": {
      cursor: "pointer",
      backgroundColor: "#3c24b2",
    },
  });

  export const CloseIcon = styled(Close)({
    position: "absolute",
    right: "8px",
    top: "8px",
    ":hover": {
      cursor: "pointer",
    },
  });
