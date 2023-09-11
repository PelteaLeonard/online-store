import Table from "@mui/material/Table";
import Tooltip from "@mui/material/Tooltip";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import TableSortLabel from "@mui/material/TableSortLabel";

import { ORDER } from "../../constants/order-constants";
import { useState } from "react";

import {
  Box,
  TableRow,
  TableHead,
  TableFooter,
  TablePagination,
} from "@mui/material";

import {
  Main,
  Title,
  Wrapper,
  Checkbox,
  Container,
  DeleteIcon,
  DenseSwitch,
  SelectedText,
  AddBookButton,
  TableBodyCell,
  TableHeadCell,
  TableContainer,
  DenseTableCell,
  AbsoluteTableHead,
  AddBookButtonWrapper,
  DenseFormControlLabel,
} from "./styles";

import {
  LastPage,
  FirstPage,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Edit,
} from "@mui/icons-material";
import AddModal from "../../components/manage-books/add-modal";

const books = [
  {
    id: 1,
    name: "Ilie",
    description: "Sf",
    price: "£15",
    category: "Jungle",
    author: "Goethe",
    publisher: "ES Publishing",
    review: "Review",
  },
];

const headCells = [
  {
    id: "id",
    disablePadding: true,
    label: "Id",
  },
  {
    id: "name",
    disablePadding: false,
    label: "Name",
  },
  {
    id: "description",
    disablePadding: false,
    label: "Description",
  },
  {
    id: "price",
    disablePadding: false,
    label: "Price",
  },
  {
    id: "category",
    disablePadding: false,
    label: "Category",
  },
  {
    id: "author",
    disablePadding: false,
    label: "Author",
  },
  {
    id: "publisher",
    disablePadding: false,
    label: "Publisher",
  },
];

function EnhancedTableHead(props) {
  const {
    order,
    orderBy,
    rowCount,
    numSelected,
    onRequestSort,
    onSelectAllClick,
  } = props;
  const createSortHandler = (property) => () => {
    onRequestSort(property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableHeadCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableHeadCell>
        {headCells.map((headCell) => (
          <TableHeadCell
            key={headCell.id}
            align={"left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableHeadCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function TablePaginationActions(props) {
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <FirstPage />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <LastPage />
      </IconButton>
    </Box>
  );
}

function ManageBooks() {
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("title");
  const [selected, setSelected] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleOpenAddModal = () => {
    setIsOpenAddModal(true);
  };

  const handleCloseAddModal = () => {
    setIsOpenAddModal(false);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = books.map((books) => books.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === ORDER.asc;
    setOrder(isAsc ? ORDER.desc : ORDER.asc);
    setOrderBy(property);
  };

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) return -1;
    if (b[orderBy] > a[orderBy]) return 1;
    return 0;
  };

  const getComparator = (order, orderBy) => {
    return order === ORDER.desc
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const handleClickTableRow = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - books.length) : 0;

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Main>
      <Wrapper>
        <Container>
          <Title> Manage books</Title>
          <AddBookButtonWrapper>
            <AddBookButton onClick={handleOpenAddModal}>Add book</AddBookButton>
          </AddBookButtonWrapper>
          <TableContainer>
            {selected.length > 0 && (
              <AbsoluteTableHead dense={dense}>
                <Checkbox
                  color="primary"
                  indeterminate={
                    selected.length > 0 && selected.length < books.length
                  }
                  checked={books.length > 0 && selected.length === books.length}
                  onChange={handleSelectAllClick}
                  inputProps={{
                    "aria-label": "select all desserts",
                  }}
                />
                <SelectedText>{selected.length} selected</SelectedText>
                <Tooltip title="Delete books">
                  <IconButton color="error">
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
                {selected.length === 1 ? (
                  <Tooltip title="Edit books">
                    <IconButton color="primary">
                      <Edit />
                    </IconButton>
                  </Tooltip>
                ) : null}
              </AbsoluteTableHead>
            )}
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={books.length}
              />
              <TableBody>
                {books
                  .sort(getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((book, index) => {
                    const isItemSelected = isSelected(book.id);
                    const labelId = `enhanced-table-checkbox-${index}`;
                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClickTableRow(event, book.id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={book.id}
                        selected={isItemSelected}
                      >
                        <TableBodyCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                          />
                        </TableBodyCell>

                        <TableBodyCell padding="none">{book.id}</TableBodyCell>
                        <TableBodyCell>{book.name}</TableBodyCell>
                        <TableBodyCell>{book.description}</TableBodyCell>
                        <TableBodyCell>{book.price}</TableBodyCell>
                        <TableBodyCell>{book.category}</TableBodyCell>
                        <TableBodyCell>{book.author}</TableBodyCell>
                        <TableBodyCell>{book.publisher}</TableBodyCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={7} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <DenseTableCell colSpan={2}>
                    <DenseFormControlLabel
                      control={
                        <DenseSwitch
                          checked={dense}
                          onChange={handleChangeDense}
                        />
                      }
                      label="Compact"
                    />
                  </DenseTableCell>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    colSpan={7}
                    count={books.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Container>
      </Wrapper>
      <AddModal open={isOpenAddModal} handleClose={handleCloseAddModal} />
    </Main>
  );
}

export default ManageBooks;
