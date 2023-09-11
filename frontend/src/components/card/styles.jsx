import { AddShoppingCart, AddShoppingCartOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled("div")(({ dark, small }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "15px 15px 10px",
  backgroundColor: `${dark ? "#f2f2f5" : "#fff"}`,
  width: `${small ? "160px" : "190px"}`,
}));

export const ImageWrapper = styled("div")(({ small }) => ({
  "& img": {
    width: "100%",
    objectFit: "cover",
    height: `${small ? "250px" : "285px"}`,
  },
}));

export const NameWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
});

export const Name = styled("span")({
  fontWeight: "700",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
  fontSize: "14px",
});

export const RatingWrapper = styled("div")(({ small }) => ({
  display: "flex",
  justifyContent: "center",
  "& svg": {
    fontSize: `${small ? "20px" : "24px"}`,
  },
}));

export const BottomContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

export const PricesContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
});

export const RecommendedPrice = styled("span")(({ small }) => ({
  color: "#888",
  fontWeight: "600",
  fontSize: `${small ? "11px" : "12px"}`,
}));

export const ActualPrice = styled("span")(({ small }) => ({
  color: "#ef2809",
  fontWeight: "700",
  fontSize: `${small ? "14px" : "16px"}`,
}));

export const ButtonWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const ButtonWrapperSmall = styled("div")({
  padding: "6px",
});

export const AddShoppingCartButton = styled(IconButton)({
  backgroundImage: "linear-gradient(to right,#b224b3,#3c24b2)",
  padding: "8px",
  color: "#fff",
  border: "0",
  borderRadius: "4px",
  height: "calc(100% - 2px)"
});

export const AddShoppingCartIcon = styled(AddShoppingCart)(({small}) => ({
  fontSize:`${small ? "18px" : "20px"}`,
  color: "#d6d6d4"
}));




export const DiscountsContainer = styled("div")({
  position: "absolute",
  top: "20px",
  left: "0",
  display: "flex",
  flexDirection: "column",
});

export const Discount = styled("span")({
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "80px",
  fontWeight: "700",
  backgroundColor: "#e60000",
  fontSize: "12px",
  padding: "1px 10px",
  borderRadius: "4px 4px 0 0",
});

export const ExtraDiscount = styled("span")({
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "80px",
  fontWeight: "700",
  backgroundColor: "#3c24b2",
  fontSize: "10px",
  padding: "8px",
  borderRadius: "0 0 4px 4px",
});
