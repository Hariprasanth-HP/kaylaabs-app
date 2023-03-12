import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../redux/actions/TableAction";
import Header from "./Header";
import Paginate from "./Paginate";
import Table from "./Table";

const TablePage = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { details } = useSelector((state) => state.TableReducers);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangeSearch = (e) => {
    if (e.target.value.length > 0) {
      setCurrentPage(1);
    }
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchDetails());
  }, [dispatch]);
  const detailPerPage = 10;
  const totalDetails = details.length;
  const indexOfLastdetail = currentPage * detailPerPage;
  const indexOfFirstdetail = indexOfLastdetail - detailPerPage;
  const filterDetails = details.slice(indexOfFirstdetail, indexOfLastdetail);
  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
        onChange={handleChangeSearch}
      />
      <div className="container">
        <Table filterDetails={filterDetails} />
        {totalDetails > detailPerPage && (
          <Paginate
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalDetails={totalDetails}
            detailPerPage={detailPerPage}
          />
        )}
      </div>
    </>
  );
};

export default TablePage;
