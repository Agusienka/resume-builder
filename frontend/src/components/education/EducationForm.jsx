import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSchool } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { createEducation, reset } from "../../features/educations/educationSlice";
import Spinner from "../Spinner";

function EducationForm() {
  const [formData, setFormData] = useState({
    degree: "",
    degreeMajor: "",
    schoolName: "",
    location: "",
    startedAt: "",
    endedAt: "",
  });

  const { degree, degreeMajor, schoolName, location, startedAt, endedAt } =
    formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { educations, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.educations
  );

  useEffect(() => {
    dispatch({type: createEducation.fulfilled})
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || educations) {
      navigate("/education");
    }
    dispatch(reset());
  }, [educations, isError, isSuccess, isLoading, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      
    }));
    
  };


  const onSubmit = (e) => {
    e.preventDefault();

    const educationData = {
      degree,
      degreeMajor,
      schoolName,
      location,
      startedAt,
      endedAt,
    };
    dispatch(createEducation(educationData));
    console.log(educationData, "on submit") 
    return () => {
      dispatch(reset());
      navigate("/forms")
    };
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section className="heading">
        <h1>
          <FaSchool /> Education
        </h1>
        <p>Please create Education form</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="degree"
              name="degree"
              value={degree}
              placeholder="Provide your degree"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="degreeMajor"
              name="degreeMajor"
              value={degreeMajor}
              placeholder="Enter your degree major"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="schoolName"
              name="schoolName"
              value={schoolName}
              placeholder="School name"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              value={location}
              placeholder="Enter location of your school"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control"
              id="startedAt"
              name="startedAt"
              value={startedAt}
              placeholder="Enter start date MM/YYYY"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control"
              id="endedAt"
              name="endedAt"
              value={endedAt}
              placeholder="Enter end date MM/YYYY"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default EducationForm;
