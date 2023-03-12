import { TextField } from "@mui/material";
import React, { useEffect } from "react";
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
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          type="text"
          value={search}
          onChange={onChange}
        />
      </div>
    </header>
  );
};

export default Header;
