import { Groups } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled("div")({
  backgroundImage: "linear-gradient(to left, #3c24b2, #b224b3)",
  borderRadius: "4px",
});

export const Link = styled(RouterLink)({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-between",
  textDecoration: "none",
  color: "#fff",
  height: "200px",
});

export const InfoIconWrapper = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  padding: "10px",
});

export const MainIconWrapper = styled("div")({
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  backgroundColor: "#3c24b2",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const TitleWrapper = styled("div")({
  width: "100%",
});

export const Title = styled("p")({
  fontSize: "16px",
  margin: "0",
  padding: "15px",
});
