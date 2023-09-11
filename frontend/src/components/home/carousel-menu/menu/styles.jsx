import {Link as RouterLink} from "react-router-dom"
import { styled } from "@mui/material/styles";
import { DiscountOutlined, InventoryOutlined, LibraryBooksOutlined, NewReleasesOutlined, PersonOutline, SellOutlined } from "@mui/icons-material";

export const Container = styled("ul")({
  width: "300px",
  backgroundColor: "#fff",
  padding: "0",
  margin: "0",
  borderLeft: "1px solid #DCDCDC",
  borderTop: "1px solid #DCDCDC",
})

export const Item = styled("li")({
  height: "65px",
  display: "flex",
  alignItems: "center",
  listStyleType: "none",
  borderBottom: "1px solid #DCDCDC",
})


export const Link = styled(RouterLink) ({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: "#000",
  ":hover":{
    color: "#fff",
    backgroundColor: "#3c24b2",
  }
})

export const Text = styled("span")({
  fontSize: "14px",
})

export const LibraryBooksIcon = styled(LibraryBooksOutlined)({
    width: "70px",
    fontSize: "30px",
})

export const SellIcon  = styled(SellOutlined)({
  width: "70px",
  fontSize: "30px",
})



export const NewReleasesIcon  = styled(NewReleasesOutlined)({
  width: "70px",
  fontSize: "30px",
})

export const InventoryIcon  = styled(InventoryOutlined)({
  width: "70px",
  fontSize: "30px",
})

export const DiscountIcon   = styled(DiscountOutlined )({
  width: "70px",
  fontSize: "30px",
})

export const PersonIcon   = styled(PersonOutline )({
  width: "70px",
  fontSize: "30px",
})

