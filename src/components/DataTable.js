"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const styles_1 = require("@mui/material/styles");
const Box_1 = __importDefault(require("@mui/material/Box"));
const Table_1 = __importDefault(require("@mui/material/Table"));
const TableBody_1 = __importDefault(require("@mui/material/TableBody"));
const TableCell_1 = __importDefault(require("@mui/material/TableCell"));
const TableContainer_1 = __importDefault(require("@mui/material/TableContainer"));
const TableFooter_1 = __importDefault(require("@mui/material/TableFooter"));
const TablePagination_1 = __importDefault(require("@mui/material/TablePagination"));
const TableRow_1 = __importDefault(require("@mui/material/TableRow"));
const Paper_1 = __importDefault(require("@mui/material/Paper"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const FirstPage_1 = __importDefault(require("@mui/icons-material/FirstPage"));
const KeyboardArrowLeft_1 = __importDefault(require("@mui/icons-material/KeyboardArrowLeft"));
const KeyboardArrowRight_1 = __importDefault(require("@mui/icons-material/KeyboardArrowRight"));
const LastPage_1 = __importDefault(require("@mui/icons-material/LastPage"));
function TablePaginationActions(props) {
    const theme = (0, styles_1.useTheme)();
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
    return (<Box_1.default sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton_1.default onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
        {theme.direction === 'rtl' ? <LastPage_1.default /> : <FirstPage_1.default />}
      </IconButton_1.default>
      <IconButton_1.default onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight_1.default /> : <KeyboardArrowLeft_1.default />}
      </IconButton_1.default>
      <IconButton_1.default onClick={handleNextButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="next page">
        {theme.direction === 'rtl' ? <KeyboardArrowLeft_1.default /> : <KeyboardArrowRight_1.default />}
      </IconButton_1.default>
      <IconButton_1.default onClick={handleLastPageButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="last page">
        {theme.direction === 'rtl' ? <FirstPage_1.default /> : <LastPage_1.default />}
      </IconButton_1.default>
    </Box_1.default>);
}
function createData(name, calories, fat) {
    return { name, calories, fat };
}
const rows = [
    createData('Cupcake', 305, 3.7),
    createData('Donut', 452, 25.0),
    createData('Eclair', 262, 16.0),
    createData('Frozen yoghurt', 159, 6.0),
    createData('Gingerbread', 356, 16.0),
    createData('Honeycomb', 408, 3.2),
    createData('Ice cream sandwich', 237, 9.0),
    createData('Jelly Bean', 375, 0.0),
    createData('KitKat', 518, 26.0),
    createData('Lollipop', 392, 0.2),
    createData('Marshmallow', 318, 0),
    createData('Nougat', 360, 19.0),
    createData('Oreo', 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));
export function DataTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (<TableContainer_1.default component={Paper_1.default}>
      <Table_1.default sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableBody_1.default>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows).map((row) => (<TableRow_1.default key={row.name}>
              <TableCell_1.default component="th" scope="row">
                {row.name}
              </TableCell_1.default>
              <TableCell_1.default style={{ width: 160 }} align="right">
                {row.calories}
              </TableCell_1.default>
              <TableCell_1.default style={{ width: 160 }} align="right">
                {row.fat}
              </TableCell_1.default>
            </TableRow_1.default>))}
          {emptyRows > 0 && (<TableRow_1.default style={{ height: 53 * emptyRows }}>
              <TableCell_1.default colSpan={6}/>
            </TableRow_1.default>)}
        </TableBody_1.default>
        <TableFooter_1.default>
          <TableRow_1.default>
            <TablePagination_1.default rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]} colSpan={3} count={rows.length} rowsPerPage={rowsPerPage} page={page} SelectProps={{
            inputProps: {
                'aria-label': 'rows per page',
            },
            native: true,
        }} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} ActionsComponent={TablePaginationActions}/>
          </TableRow_1.default>
        </TableFooter_1.default>
      </Table_1.default>
    </TableContainer_1.default>);
}
/* exports.default = DataTable */;
