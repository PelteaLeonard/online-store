import MuiLinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

export const Container = styled("div")({
  backgroundColor: "#fff",
  height: "70px",
  display: "flex",
  justifyContent: "center",
});

export const Wrapper = styled("div")({
  width: "1200px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
});

export const LinearProgress = styled(MuiLinearProgress)({
  width: "700px",
  height: "10px",
  borderRadius: "5px",
  color: "#4524b2",
  backgroundColor: "#b2b2b2",
  "& .MuiLinearProgress-bar": {
    backgroundImage: "linear-gradient(90deg,#4524b2,#a924b3)",
    borderRadius: "5px",
  },
});

export const Text = styled("span")({
  fontSize: "14px",
  fontWeight: "700",
  color: "#8924b3",
});
