import React from "react";
import pressIndexData from "../data/RSB_DataSet.json";
import ".././index.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import "/node_modules/flag-icons/css/flag-icons.min.css";



const columns = [
  {
    id: "Ranking",
    label: "Ranking",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Country",
    label: "Country",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Score",
    label: "Score",
    minWidth: 100,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

const rows = [];

pressIndexData.map((ele) => {
  rows.push(ele);
});

const Row = ({ row }) => {
  // collapseable state
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <TableRow hover tabIndex={-1} key={row.code}>
        {/* Drop Down Button  */}
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          {/* Content of Each Col in a  Row  */}
        </TableCell>
        {columns.map((column) => {
          const value = row[column.id];
          return (
            <TableCell key={column.id}>
              <span className="font-bold text-base text-slate-500">
                {value}
              </span>
            </TableCell>
          );
        })}
      </TableRow>
      {/* collapseable row  */}
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div className="flex flex-col justify-evenly gap-1 py-4 px-2 bg-slate-100 font-bold text-base md:gap-4 md:flex-row ">
              <div className="text-slate-500">
                Political Context Score:
                <span className="text-black px-4">{row.PoliticalContext}</span>
              </div>
              <div className="text-slate-500">
                Economic Context Score:{" "}
                <span className="text-black px-4">{row.PoliticalContext}</span>
              </div>
              <div className="text-slate-500">
                Legal Framework Score:{" "}
                <span className="text-black px-4">{row.LegalFramework}</span>
              </div>
              <div className="text-slate-500">
                Safety Score:{" "}
                <span className="text-black px-4">{row.SafetyScore}</span>
              </div>
              <div className="text-slate-500">
                Sociocultural Context Score:
                <span className="text-black px-4">
                  {row.SocioculturalContext}
                </span>
              </div>
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const TableComponent = () => {
  // pagination States
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // pagination handelers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // sort handlers

  return (
    <div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer className="max-h-full">
          <Table stickyHeader aria-label="sticky table" size="small">
            {/* Header of Table  */}
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    borderTop: "1px solid white",
                    backgroundColor: "#00111c",
                  }}
                />
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{
                      minWidth: column.minWidth,
                      backgroundColor: "#00111c",
                      borderTop: "1px solid white",
                    }}
                  >
                    <span className="font-bold text-base text-white">
                      {column.label}
                    </span>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            {/* Body of Table  */}
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return <Row row={row} />;
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <caption className="sr-only">
          A basic table example with a caption
        </caption>
        <TablePagination
          rowsPerPageOptions={[8, 10, 20]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default TableComponent;
