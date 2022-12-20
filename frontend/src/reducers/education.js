import {
    CREATE_EDUCATION_REQUEST,
    CREATE_EDUCATION_SUCCESS,
    CREATE_EDUCATION_FAILURE,
    GET_EDUCATION_REQUEST,
    GET_EDUCATION_SUCCESS,
    GET_EDUCATION_FAILURE,
    GET_EDUCATION_BYID_REQUEST,
    GET_EDUCATION_BYID_SUCCESS,
    GET_EDUCATION_BYID_FAILURE,
    UPDATE_EDUCATION_BYID_REQUEST,
    UPDATE_EDUCATION_BYID_SUCCESS,
    UPDATE_EDUCATION_BYID_FAILURE,
    DELETE_EDUCATION_BYID_REQUEST,
    DELETE_EDUCATION_BYID_SUCCESS,
    DELETE_EDUCATION_BYID_FAILURE,
  } from "../actionTypes/education";
  const initialState = {
    loading: false,
    item: "",
    items: [],
    error: "",
  };
  export function educations(state = initialState, action) {
    switch (action.type) {
      case CREATE_EDUCATION_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case CREATE_EDUCATION_SUCCESS:
        return {
          ...state,
          loading: false,
        };
      case CREATE_EDUCATION_FAILURE:
        return {
          ...state,
          loading: false,
        };
  
      case GET_EDUCATION_REQUEST:
        return {
          ...state,
        };
      case GET_EDUCATION_SUCCESS:
        return {
          ...state,
          items: action.payload?.response,
        };
      case GET_EDUCATION_FAILURE:
        return {
          ...state,
          error: action.payload,
        };
  
      case GET_EDUCATION_BYID_REQUEST:
        return {
          ...state,
        };
      case GET_EDUCATION_BYID_SUCCESS:
        return {
          ...state,
          item: action.payload?.response,
        };
      case GET_EDUCATION_BYID_FAILURE:
        return {
          ...state,
          error: action.payload,
        };
  
      case UPDATE_EDUCATION_BYID_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case UPDATE_EDUCATION_BYID_SUCCESS:
        return {
          ...state,
          loading: false,
        };
      case UPDATE_EDUCATION_BYID_FAILURE:
        return {
          ...state,
          loading: false,
        };
  
      case DELETE_EDUCATION_BYID_REQUEST:
        return {
          ...state,
          items: state.items.map((res) =>
            res._id === action.payload ? { ...res, loading: true } : res
          ),
          loading: true,
        };
      case DELETE_EDUCATION_BYID_SUCCESS:
        return {
          ...state,
          items: state.items.filter((res) => res._id !== action.payload),
          loading: false,
        };
      case DELETE_EDUCATION_BYID_FAILURE:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
  
      default:
        return state;
    }
  }