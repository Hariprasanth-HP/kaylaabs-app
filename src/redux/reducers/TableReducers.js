import * as actions from "../constants/TableConstants";

const initialState = {
  details: [],
  searchResults: [],
  page: 1,
};

export const TableReducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        details: action.payload.data,
        searchResults: action.payload.data,
      };
    case actions.FETCH_DETAIL_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actions.SEARCH_DETAIL:
      return {
        ...state,
        details: action.payload,
        page: 1,
      };
    default:
      return state;
  }
};
