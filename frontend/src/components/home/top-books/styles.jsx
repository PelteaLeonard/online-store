import { styled } from "@mui/material/styles";

import { ArrowBack, ArrowForward, Circle } from "@mui/icons-material";

export const SectionWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  paddingBottom: "55px",
});

export const Section = styled("section")({
  width: "1200px",
});

export const Title = styled("h2")({
  fontSize: "20px",
  fontWeight: "400",
});

export const CardsWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

export const CardsContainer = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});

export const ArrowBackIcon = styled(ArrowBack)(({ disabled }) => ({
  position: "absolute",
  fontSize: "30px",
  color: `${disabled ? "#fff" : "#000"}`,
  padding: "5px",
  backgroundColor: `${disabled ? "#000" : "#fff"}`,
  borderRadius: "50%",
  left: "-40px",
  ":hover": {
    cursor: `${disabled ? "default" : "pointer"}`,
  },
}));

export const ArrowForwardIcon = styled(ArrowForward)(({ disabled }) => ({
  position: "absolute",
  fontSize: "30px",
  color: `${disabled ? "#fff" : "#000"}`,
  padding: "5px",
  backgroundColor: `${disabled ? "#000" : "#fff"}`,
  borderRadius: "50%",
  right: "-40px",
  ":hover": {
    cursor: `${disabled ? "default" : "pointer"}`,
  },
}));

export const Navigation = styled("div")({
  fontSize: "10px",
  position: "absolute",
  bottom: "-35px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  color: "gray",
});

export const CircleIcon = styled(Circle, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ active }) => ({
  fontSize: "12px",
  color: `${active ? "#b224b3" : "#1e1e1e"}`,
  ":hover": {
    cursor: "pointer",
  },
}));
