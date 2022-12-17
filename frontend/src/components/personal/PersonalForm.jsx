import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSchool } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { createPersonal, reset } from "../../features/personals/personalSlice";
import Spinner from "../Spinner";

function PersonalForm() {
  const [formData, setFormData] = useState({
    state:'',
    city: "",
    linkedIn: "",
    gitHub: "",
  });

  const { state, city, linkedIn, gitHub } = formData;
  
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { personals, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.personals
  );

  useEffect(() => {
    dispatch({type: createPersonal.fulfilled})
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || personals) {
      navigate("/personal");
    }
    dispatch(reset());
  }, [personals, isError, isSuccess, isLoading, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      
    }));
    
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const personalData = {
      state,
      city,
      linkedIn,
      gitHub,
    };
    dispatch(createPersonal(personalData))
    console.log(personalData, 'personal form dispatching ');
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
          <FaSchool /> Personal info
        </h1>
        <p>Please create Personal form</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="state"
              name="state"
              value={state}
              placeholder="Enter name of the state you live in"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              value={city}
              placeholder="Enter the name of the city you live in"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="linkedIn"
              name="linkedIn"
              value={linkedIn}
              placeholder="Link to LinkedIn"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="gitHub"
              name="gitHub"
              value={gitHub}
              placeholder="Link to gitHub"
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

export default PersonalForm;
