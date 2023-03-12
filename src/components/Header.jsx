import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchDetails } from "../redux/actions/TableAction";
import "./styles.css";

const Header = ({ search, onChange }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchDetails(search));
  }, [search, dispatch]);

  return (
    <header>
      <div className="title">
        <h4>Data Table</h4>&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          value={search}
          onChange={onChange}
          placeholder="Search"
        />
      </div>
    </header>
  );
};

export default Header;
