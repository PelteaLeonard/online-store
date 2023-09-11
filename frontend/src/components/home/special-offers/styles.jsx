import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import First from "../../../images/Special offers/special-offers-1.jpg";
import Second from "../../../images/Special offers/special-offers-2.jpg";
import { ChevronRight } from "@mui/icons-material";

export const SectionWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#fff",
  padding: "10px 0 30px",
});

export const Section = styled("section")({
  width: "1200px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export const Title = styled("h2")({
  textAlign: "center",
});

export const ImagesContainer = styled("div")({
  display: "flex",
  gap: "20px",
});

export const FirstImageWrapper = styled("div")({
  backgroundImage: "url(" + First + ")",
  width: "50%",
  height: "240px",
  borderRadius: "8px",
  transition: "transform 0.2s ease",
  ":hover": {
    transform: "scale(1.02)",
  },
});

export const SecondImageWrapper = styled("div")({
  backgroundImage: "url(" + Second + ")",
  width: "50%",
  height: "240px",
  borderRadius: "8px",
  transition: "transform 0.2s ease",
  ":hover": {
    transform: "scale(1.02)",
  },
});

export const BooksDealsLink = styled(Link)({
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    textDecoration: "none",
});

export const PackageDealsLink = styled(Link)({
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    textDecoration: "none",
});

export const FirstImageContainer = styled("div")({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
});

export const SecondImageContainer = styled("div")({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
});

export const FirstImageText = styled("span")({
  fontSize: "28px",
  fontWeight: "700",
  color: "#fff",
});

export const SecondImageText = styled("span")({
  fontSize: "28px",
  fontWeight: "700",
  color: "rgb(168, 95, 107)",
});

export const FirstImageButton = styled("button")({
  width: "150px",
  height: "36px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "none",
  fontSize: "14px",
  borderRadius: "4px",
  color: "#fff",
  border: "2px solid #fff2",
  ":hover": {
    cursor: "pointer",
  },
});

export const SecondImageButton = styled("button")({
  width: "150px",
  height: "36px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "none",
  fontSize: "14px",
  borderRadius: "4px",
  color: "rgb(168, 95, 107)",
  border: "2px solid rgb(168, 95, 107)",
  ":hover": {
    cursor: "pointer",
  },
});

export const ChevronRightIcon = styled(ChevronRight)({
  fontSize: "20px",
});

export const FirstImageSpan = styled("span")({});

export const SecondImageSpan = styled("span")({});