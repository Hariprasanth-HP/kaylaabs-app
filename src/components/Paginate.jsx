import { Button } from "@mui/material";
import React from "react";
import "./styles.css";
const Paginate = ({
  currentPage,
  setCurrentPage,
  totalDetails,
  detailPerPage,
}) => {
  const totalPages = Math.ceil(totalDetails / detailPerPage);

  let pages = [];

  for (let p = 1; p <= totalPages; p++) {
    pages.push(p);
  }

  return (
    <ul className="pagination">
      <li className={`page-item ${currentPage === 1 && `disabled`}`}>
        <Button
          className="page-link"
          onClick={() => setCurrentPage(currentPage - 1)}
          variant="contained"
        >
          &laquo;
        </Button>
      </li>
      {pages.map((page) => (
        <li
          key={page}
          className={`page-item ${page === currentPage && `active`}`}
          onClick={() => setCurrentPage(page)}
        >
          <Button className="page-link" variant="contained">
            {page}
          </Button>
        </li>
      ))}
      <li className={`page-item ${currentPage === totalPages && `disabled`}`}>
        <Button
          className="page-link"
          onClick={() => setCurrentPage(currentPage + 1)}
          variant="contained"
        >
          &raquo;
        </Button>
      </li>
    </ul>
  );
};

export default Paginate;
