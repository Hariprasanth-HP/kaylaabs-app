import * as actions from "../constants/TableConstants";
import axios from "axios";

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: actions.FETCH_POST_REQUEST });

  try {
    const data = await axios.get("https://api.punkapi.com/v2/beers");
    dispatch({ type: actions.FETCH_POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actions.FETCH_POST_FAILED, payload: error.message });
    console.log(error.message);
  }
};

export const sortPostsAsc = () => (dispatch, getState) => {
  const { TableReducers } = getState();
  dispatch({ type: actions.SORT_POSTS_ASC, payload: TableReducers.posts });
};

export const sortPostsDesc = () => (dispatch, getState) => {
  const { TableReducers } = getState();
  dispatch({ type: actions.SORT_POSTS_DESC, payload: TableReducers.posts });
};

export const searchPosts = (query) => (dispatch, getState) => {
  console.log(query);
  const { TableReducers } = getState();
  const searchResults = TableReducers.searchResults.filter((post) =>
    post.name.toLowerCase().includes(query.toLowerCase())
  );
  dispatch({ type: actions.SEARCH_POSTS, payload: searchResults });
};
