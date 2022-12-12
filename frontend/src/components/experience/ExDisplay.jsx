import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../Spinner";
import {
  getExperiences,
  reset,
} from "../../features/experiences/experienceSlice";
import ExperienceItem from "./ExperienceItem";

function ExDisplay() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { experiences, isLoading, isError, message } = useSelector(
    (state) => state.experiences
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getExperiences());
    console.log(getExperiences);

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="content">
        <div className="form-group">Experience Data
          {experiences.length > 0 ? (
            <div className="goals">
              {experiences.map((experience) => (
                <ExperienceItem key={experience._id} experience={experience} />
              ))}
            </div>
          ) : (
            <>
              <h3>You have not created any job history</h3>
              <button type="submit" className="btn">
                <Link to="/experience">Submit</Link>
              </button>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default ExDisplay;
