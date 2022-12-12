import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSchool } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { createExtra, reset } from "../../features/extras/extraSlice";
import Spinner from "../Spinner";

function ExtraForm() {
  const [formData, setFormData] = useState({
    gpa: "",
    academicHonors: "",
    courseWork: "",
  });

  const { gpa, academicHonors, courseWork } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { extras, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.extras
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || extras) {
      navigate("/extra");
    }
    dispatch(reset());
  }, [extras, isError, isSuccess, isLoading, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      
    }));
    console.log(extras)
  };


  const onSubmit = (e) => {
    e.preventDefault();

    const extraData = {
      gpa,
      academicHonors,
      courseWork,
    };
    dispatch(createExtra(extraData));

    return () => {
      dispatch(reset());
    };
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section className="heading">
        <h1>
          <FaSchool /> Extra
        </h1>
        <p>Please create Extra form</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="gpa"
              name="gpa"
              value={gpa}
              placeholder="Provide your GPA"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="academicHonors"
              name="academicHonors"
              value={academicHonors}
              placeholder="Enter your academic honors"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="courseWork"
              name="courseWork"
              value={courseWork}
              placeholder="Relevant coursework"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              <Link to="/exdisp">Submit</Link>
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default ExtraForm;