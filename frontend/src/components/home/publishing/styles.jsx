import { styled } from "@mui/material/styles";

export const SectionWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "f2f5f5",
});

export const Section = styled("section")({
  width: "1200px",
  display: "flex",
  flexDirection: "column",
  paddingBottom: "24px",
  gap: "16px"
});

export const Title = styled("h2")({
  fontSize: "20px",
  fontWeight: "400",
  margin: "0",
});

export const CardsContainer = styled("div")({
    display: "flex",
    gap: "calc((1200px - (190px * 6)) / 5)"
});

export const Card = styled("div")({
    position: "relative",
    width: "190px",
    height: "210px",
});

export const Image = styled("img")({
    width: "100%",
    height: "100%",
    borderRadius: "8px",
});