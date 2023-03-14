import * as actions from "../constants/TableConstants";
import axios from "axios";

export const fetchDetails = (pageNum) => async (dispatch) => {
  dispatch({ type: actions.FETCH_DETAIL_REQUEST });

  try {
    const data = await axios.get(
      `https://api.punkapi.com/v2/beers?page=${pageNum}&per_page=10`
    );
    dispatch({ type: actions.FETCH_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actions.FETCH_DETAIL_FAILED, payload: error.message });
    console.log(error.message);
  }
};

export const searchDetails = (query) => (dispatch, getState) => {
  const { TableReducers } = getState();
  const searchResults = TableReducers.searchResults.filter((detail) =>
    detail.name.toLowerCase().includes(query.toLowerCase())
  );
  dispatch({ type: actions.SEARCH_DETAIL, payload: searchResults });
};
