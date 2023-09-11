import { styled } from "@mui/material/styles";
import { FormControlLabel, Switch } from "@mui/material";
import MuiTableCell from "@mui/material/TableCell";
import MuiCheckbox from "@mui/material/Checkbox";
import MuiDeleteIcon from "@mui/icons-material/Delete";
import MuiTableFooter from "@mui/material/TableFooter";

export const Main = styled("main")({
  height: "calc(100vh - 80px - 50px - 60px)",
  backgroundColor: "#f2f5f5",
});

export const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
});

export const Container = styled("div")({
  width: "1200px",
  display: "flex",
  flexDirection: "column",
  padding: "20px 0",
});

export const Title = styled("h2")({
  margin: "0",
  textAlign: "center",
  padding: "20px 0 20px",
});

export const AddReviewButtonWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  padding: "20px 0",
});

export const AddReviewButton = styled("button")({
  border: "none",
  fontSize: "13px",
  backgroundColor: "#b224b3",
  padding: "10px 36px",
  borderRadius: "4px",
  color: "#fff",
  fontWeight: "600",
  transition: "background-color .5s",
  ":hover": {
    cursor: "pointer",
    backgroundColor: "#3c24b2",
  },
});

export const TableContainer = styled("div")({
  position: "relative",
  overflowX: "auto",
  backgroundColor: "#fff",
});

export const AbsoluteTableHead = styled("div")(({ dense }) => ({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: dense ? "38px" : "58px",
  backgroundColor: "#fff",
  padding: "0 4px",
  zIndex: "1",
  "& span.MuiButtonBase-root": {
    padding: dense ? "0 11px 0 12px" : "9px 10px 9px 9px",
  },
}));

export const Checkbox = styled(MuiCheckbox)({
  color: "rgb(99, 115, 129)",
});

export const SelectedText = styled("p")({
  margin: "0",
  fontWeight: "600",
  lineHeight: "1.5",
  fontSize: "1rem",
  flexGrow: "1",
  color: "#0046c7",
});

export const DeleteIcon = styled(MuiDeleteIcon)({
  ":hover": {
    cursor: "pointer",
  },
});

export const TableHeadCell = styled(MuiTableCell)({
  fontWeight: "600",
});

export const TableBodyCell = styled(MuiTableCell)({});

export const TableFooter = styled(MuiTableFooter)({
  color: "rgb(33, 43, 54)",
});

export const DenseTableCell = styled(MuiTableCell)({
  padding: "0 8px",
});

export const DenseFormControlLabel = styled(FormControlLabel)({
  margin: "0",
  color: "rgb(33, 43, 54)",
});

export const DenseSwitch = styled(Switch)({});
