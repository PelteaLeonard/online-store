import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";

import { Button, TextField, Divider as MuiDivider } from "@mui/material";

export const Main = styled("main")({
  backgroundColor: "#f0f1f2",
  height: "calc(100vh - 80px - 50px - 60px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Container = styled("div")({
  width: "400px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

export const Form = styled("form")({
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  padding: "30px",
});

export const BackLink = styled(Link)({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  fontSize: "14px",
  marginLeft: "-8px",
  color: "#126fdf",
});

export const LinkText = styled("span")({});

export const Title = styled("h2")({
  margin: "0",
  fontSize: "18px",
  fontWeight: "400",
  textAlign: "center",
  color: "#1f2533",
});

export const Description = styled("p")({
  textAlign: "center",
  margin: "20px 0",
  color: "#6b7999",
  fontSize: "14px",
});

export const InputField = styled(TextField)({
  "& input": {
    fontSize: "14px",
  },
});

export const SubmitButton = styled(Button)({
  color: "#fff",
  background: "linear-gradient(to right,#b224b3,#3c24b2)",
  marginTop: "10px",
  textTransform: "none",
  border: "0",
});

export const Divider = styled(MuiDivider)({
  color: "#6b7999",
  margin: "20px 0",
});

export const LoginWithText = styled("p")({
  margin: "0",
  textAlign: "center",
  fontSize: "14px",
  color: "#1f2533",
});

export const GoogleButton = styled(Button)({
  marginTop: "20px",
  color: "#fff",
  background: "linear-gradient(-120deg, #4285f4, #ea4335)",
  textTransform: "none",
  border: "0",
  ":hover": {
    border: "0",
  },
});
