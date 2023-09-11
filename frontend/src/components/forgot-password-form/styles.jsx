import { styled } from "@mui/material/styles";

import { Button } from "@mui/material";

import {
  Form as BaseForm,
  Divider as BaseDivider,
} from "../shared/authentication/styles";

import { Link } from "react-router-dom";

export const Form = styled(BaseForm)({
  padding: "30px",
});

export const FoundButton = styled(Button)({
  color: "#fff",
  background: "linear-gradient(to right,#b224b3,#3c24b2)",
  marginTop: "10px",
  textTransform: "none",
  border: "0",
});

export const Divider = styled(BaseDivider)({
    margin: "30px 0 10px"
})

export const LoginLink = styled(Link)({
  textDecoration: "none",
});
