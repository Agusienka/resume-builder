import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import makeStyles from '@mui/styles/makeStyles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from "react-redux";
import { createEducation } from "../../actions/education";





function CreateEducation() {
  // const classes = useStyles();
  const history = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.educations?.loading);
  const [inputs, setInputs] = useState({
    degree:'',
    degreeMajor:'',
    schoolName:'',
    location:'',
    startedAt:'',
    endedAt:''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    handleValidate(inputs);
  }, [inputs]);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (handleValidate(inputs)) {
      dispatch(createEducation(inputs, history));
    }
  }

  function handleValidate(values) {
    let errors = {};
    let isValid = true;
    if (!values["degree"]) {
      isValid = false;
      errors["degreeMajor"] = "Please enter degree";
    }
    if (!values["degreeMajor"]) {
      isValid = false;
      errors["degreeMajor"] = "Please enter degree major.";
    }
    if (!values["schoolName"]) {
      isValid = false;
      errors["schoolName"] = "Please enter school name";
    }
    if (!values["location"]) {
      isValid = false;
      errors["location"] = "Please enter school location";
    }
    if (!values["startedAt"]) {
      isValid = false;
      errors["startedAt"] = "Please enter start date";
    }
    if (!values["endedAt"]) {
      isValid = false;
      errors["endedAt"] = "Please enter end date";
    }
    setErrors(errors);
    return isValid;
  }

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>Create Education</h1>
      <form
        // className={classes.root}
        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   flexDirection: "column",
        // }}
        onSubmit={handleSubmit}
      >
        <TextField
          type="text"
          name="degree"
          label="degree"
          placeholder='Enter degree'
          value={inputs.degree}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          type="text"
          name="degreeMajor"
          placeholder='Enter degree major'
          label="degreeMajor"
          value={inputs.degreeMajor}
          onChange={handleChange}
          fullWidth
        />
         <TextField
          type="text"
          name="schoolName"
          label="schoolName"
          placeholder='Enter school name'
          value={inputs.schoolName}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          type="text"
          name="location"
          label="location"
          placeholder='Enter location'
          value={inputs.location}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          type="text"
          name="startedAt"
          label="startedAt"
          placeholder='Enter start date'
          value={inputs.startedAt}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          type="text"
          name="endedAt"
          label="endedAt"
          placeholder='Enter end date'
          value={inputs.endedAt}
          onChange={handleChange}
          fullWidth
        />
        <Button
          disabled={loading}
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
        {loading && (
          <CircularProgress size={24} className='buttonProgress' />
        )}
      </form>
    </React.Fragment>
  );
}

export default CreateEducation;