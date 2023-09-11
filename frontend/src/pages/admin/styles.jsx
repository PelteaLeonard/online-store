import {
  Class,
  CollectionsBookmark,
  Create,
  Groups,
  LibraryBooks,
  Reviews,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

export const Main = styled("main")({
  height: "calc(100vh - 80px - 50px - 60px)",
  backgroundColor: "#f2f5f5",
});

export const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  height: "100%",
  alignItems: "center",
});

export const Container = styled("div")({
  width: "1200px",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
  padding: "20px 0",
});

export const GroupsIcon = styled(Groups)({
  fontSize: "32px",
});

export const AuthorIcon = styled(Create)({
  fontSize: "32px",
});

export const ReviewIcon = styled(Reviews)({
  fontSize: "32px",
});

export const BookIcon = styled(LibraryBooks)({
  fontSize: "32px",
});

export const PublishingIcon = styled(CollectionsBookmark)({
  fontSize: "32px",
});

export const CategoriesIcon = styled(Class)({
  fontSize: "32px",
});
