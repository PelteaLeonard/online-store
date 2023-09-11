import { styled } from "@mui/material/styles";

import { Form as BaseForm } from "../../shared/authentication/styles";

export const Form = styled(BaseForm)({
  padding: "20px 30px 30px",
});

export const TextFieldsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export const TermsConditionsContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const TermsConditionsText = styled("p")({
  fontSize: "14px",
  color: "#1f2533",
});
