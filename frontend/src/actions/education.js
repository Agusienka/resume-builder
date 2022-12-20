import {
    CREATE_EDUCATION_SUCCESS,
    CREATE_EDUCATION_REQUEST,
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
  import { api_url } from "../config/index";
  const axios = require("axios");
  
  export function createEducation(data, history) {
    return (dispatch) => {
      dispatch({ type: CREATE_EDUCATION_REQUEST });
      axios
        axios.post('http://localhost:5000/api/education`, data)
        .then(function (res) {
          console.log("res=>", res.data);
          setTimeout(() => {
            dispatch({
              type: CREATE_EDUCATION_SUCCESS,
              payload: res.data,
            });
            history.push("/");
          }, 1000);
        })
        .catch(function (error) {
          const { response } = error;
          console.log("err", response);
          if (response !== undefined) {
            dispatch({
              type: CREATE_EDUCATION_FAILURE,
              payload: response.data,
            });
            alert(response.data?.message);
          }
        });
    };
  }
  
  export function getEducations() {
    return (dispatch) => {
      dispatch({ type: GET_EDUCATION_REQUEST });
      axios
        .get(`${api_url}/api/education`)
        .then(function (res) {
          console.log("res =>", res.data);
          dispatch({
            type: GET_EDUCATION_SUCCESS,
            payload: res.data,
          });
        })
        .catch(function (error) {
          const { response } = error;
          console.log("err", response);
          if (response !== undefined) {
            dispatch({
              type: GET_EDUCATION_FAILURE,
              payload: response?.data,
            });
          }
        });
    };
  }
  
  export function getEducationById(id) {
    return (dispatch) => {
      dispatch({ type: GET_EDUCATION_BYID_REQUEST });
      axios
        .get(`${api_url}/api/education/${id}`)
        .then(function (res) {
          console.log("res =>", res.data);
          dispatch({
            type: GET_EDUCATION_BYID_SUCCESS,
            payload: res.data,
          });
        })
        .catch(function (error) {
          const { response } = error;
          console.log("err", response);
          if (response !== undefined) {
            dispatch({
              type: GET_EDUCATION_BYID_FAILURE,
              payload: response.data,
            });
          }
        });
    };
  }
  
  export function updateEducationById(id, data, history) {
    return (dispatch) => {
      dispatch({ type: UPDATE_EDUCATION_BYID_REQUEST });
      axios
        .put(`${api_url}/api/education/${id}`, data)
        .then(function (res) {
          console.log("res=>", res.data);
          setTimeout(() => {
            dispatch({
              type: UPDATE_EDUCATION_BYID_SUCCESS,
              payload: res.data,
            });
            history.push("/");
          }, 1000);
        })
        .catch(function (error) {
          const { response } = error;
          console.log("err", response);
          if (response !== undefined) {
            dispatch({
              type: UPDATE_EDUCATION_BYID_FAILURE,
              payload: response.data,
            });
            alert(response.data?.message);
          }
        });
    };
  }
  
  export function deleteEducationById(id) {
    return (dispatch) => {
      dispatch({ type: DELETE_EDUCATION_BYID_REQUEST });
      axios
        .delete(`${api_url}/api/education/${id}`)
        .then(function (res) {
          console.log("res =>", res.data);
          dispatch({
            type: DELETE_EDUCATION_BYID_SUCCESS,
            payload: id,
          });
        })
        .catch(function (error) {
          const { response } = error;
          console.log("err", response);
          if (response !== undefined) {
            dispatch({
              type: DELETE_EDUCATION_BYID_FAILURE,
              payload: response.data,
            });
            alert(response.data?.message);
          }
        });
    };
  }