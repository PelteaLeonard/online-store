import { styled } from "@mui/material";

import { LocalLibrary } from "@mui/icons-material";

export const Container = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Icon = styled(LocalLibrary)({
  fontSize: "50px",
  color: "#6424b2",
});

export const Text = styled("span")({
  fontSize: "30px",
});
