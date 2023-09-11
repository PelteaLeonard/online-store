import { ArrowBack, ArrowForward, Circle } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
});

export const InnerContainer = styled("div")({
  width: "900px",
});

export const Image = styled("img")((show) => ({
  width: "100%",
  height: "calc(65px * 6)",
  display: show ? "block" : "none",
}));

export const ContentContainer = styled("div")({
  position: "relative",
  display: "flex",
  alignItems: "center",
  boxShadow: "0 0 50px -10px rgba(0, 0, 0, .1)",
});

export const ArrowBackIcon = styled(ArrowBack)({
  position: "absolute",
  fontSize: "30px",
  padding: "5px",
  color: "#000",
  backgroundColor: "#fff",
  borderRadius: "50%",
  left: "20px",
  ":hover": {
    cursor: "pointer",
  },
});

export const ArrowForwardIcon = styled(ArrowForward)({
  position: "absolute",
  fontSize: "30px",
  padding: "5px",
  color: "#000",
  backgroundColor: "#fff",
  borderRadius: "50%",
  right: "20px",
  ":hover": {
    cursor: "pointer",
  },
});

export const Navigation = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  position: "absolute",
  bottom: "10px",
  gap: "10px",
});

export const CircleIcon = styled(Circle)((isEmpty) => ({
  color: isEmpty ? "#1e1e1e" : "#fff",
  fontSize: "12px",
  ":hover": {
    cursor: "pointer",
  },
}));
