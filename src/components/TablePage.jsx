import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../redux/actions/TableAction";
import Header from "./Header";
import Table from "./Table";
import { Pagination } from "./Pagination";
const TablePage = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { details } = useSelector((state) => state.TableReducers);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangeSearch = (e) => {
    if (e.target.value.length > 0) {
      setCurrentPage(currentPage);
    }
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchDetails(currentPage));
  }, [dispatch, currentPage]);
  const totalDetails = 20;
  const filterDetails = details;
  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
        onChange={handleChangeSearch}
      />

      <div className="container">
        <Table filterDetails={filterDetails} />
        {totalDetails && (
          <Pagination
            pageIndex={currentPage}
            setPageIndex={setCurrentPage}
            pageCount={totalDetails}
          />
        )}
      </div>
    </>
  );
};

export default TablePage;
