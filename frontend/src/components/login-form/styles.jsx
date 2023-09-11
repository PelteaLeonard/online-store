import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";

import { InputField } from "../shared/authentication/styles";

import { Form as BaseForm } from "../shared/authentication/styles";

export const Form = styled(BaseForm)({
  padding: "20px 30px 30px",
});

export const PasswordField = styled(InputField)({
  marginTop: "10px",
});

export const BottomContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "10px",
});

export const RememberMeContainer = styled("div")({
  display: "flex",
  marginLeft: "-10px",
});

export const RememberMeText = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
});

export const ForgotPasswordLink = styled(Link)({
  fontSize: "14px",
  textDecoration: "none",
  color: "#126FDF",
  ":hover": {
    cursor: "pointer",
  },
});
