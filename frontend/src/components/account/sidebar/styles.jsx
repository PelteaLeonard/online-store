import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const Container = styled("aside")({
  backgroundColor: "#fff",
  width: "200px",
  borderRadius: "4px",
  height: "calc(5 * 40px + 20px)",
});

export const Navigation = styled("nav")({});

export const List = styled("ul")({
  display: "flex",
  flexDirection: "column",
  padding: "10px 0",
  margin: "0",
});

export const RouterLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "active",
})((active) => ({
  color: "#000",
  textDecoration: "none",
  backgroundColor: `${active === "true" ? "purple" : "white"}`,
}));

export const Item = styled("li")({
  listStyleType: "none",
  height: "40px",
  padding: "0 20px",
  fontSize: "14px",
  display: "flex",
  alignItems: "center",
  ":hover": {
    color: "#3f24b2",
    backgroundColor: "#e5e1fa",
    cursor: "pointer",
  },
});
