import {
    FETCHING_PEOPLE_REQUEST,
    FETCHING_PEOPLE_SUCCESS,
    FETCHING_PEOPLE_FAILURE
  } from "../actions/types";
  
  const initialState = {
    isFetching: false,
    errorMessage: "",
    people: [],
    title:""
  };
  
  const peopleReducer = (state = initialState, action) => {
    console.log("---peopleReducer called",action.payload);
    switch (action.type) {
      case FETCHING_PEOPLE_REQUEST:
        return { ...state, isFetching: true };
      case FETCHING_PEOPLE_FAILURE:
        return { ...state, isFetching: false, errorMessage: action.payload };
      case FETCHING_PEOPLE_SUCCESS:
        return { ...state, isFetching: false, people: action.payload.rows,title: action.payload.title};
      default:
        return state;
    }
  };
  
  export default peopleReducer;