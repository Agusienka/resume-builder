import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "./Spinner";
import { getEducations, reset } from "../features/educations/educationSlice";
import EducationItem from "./education/EducationItem";
import {getExperiences} from "../features/experiences/experienceSlice";
import { getPersonals } from "../features/personals/personalSlice";
import PersonalItem from "./personal/PersonalItem";
import { getExtras } from "../features/extras/extraSlice";
import ExtraItem from "./extra/ExtraItem";
import { Fragment } from "react";
import ExperienceItem from "./experience/ExperienceItem";


export default function ResumeData() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { educations, isLoading, isError, message } = useSelector(
    (state) => state.educations
  );
  const { experiences} = useSelector(
    (state) => state.experiences
  );
  const { personals } = useSelector(
    (state) => state.personals
  );
  const { extras } = useSelector(
    (state) => state.extras
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getEducations());
    console.log(getEducations, 'dispatching educ to resume form collection')
    dispatch(getExperiences());
    dispatch(getPersonals());
    dispatch(getExtras());
    console.log(getEducations, "use effect");

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }


  return (
    <Fragment>
    <div>ResumeData</div>
    <div>
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
              {newFunction('/experience')}
              </button>
            </>
          )}
        </div>
      </section>
    </div>
    <div>
    <section className="content">
        <div className="form-group">Education Data
          {educations.length > 0 ? (
            <div className="goals">
              {educations.map((education) => (
                <EducationItem key={education._id} education={education} />
              ))}
            </div>
          ) : (
            <>
              <h3>You have not created any eduction history</h3>
              <button type="submit" className="btn">
              {newFunction('/education')}
              </button>
            </>
          )}
        </div>
      </section>
    </div>
    <div>
    <section className="content">
        <div className="form-group"> Extra Data
          {extras.length > 0 ? (
            <div className="goals">
              {extras.map((extra) => (
                <ExtraItem key={extra._id} extra={extra} />
              ))}
            </div>
          ) : (
            <>
              <h3>You have not created any eduction history</h3>
              <button type="submit" className="btn">
              {newFunction('/extra')}
              </button>
            </>
          )}
        </div>
      </section>
    </div>
    <div>
    <section className="content">
        <div className="form-group"> Personal Data
          {personals.length > 0 ? (
            <div className="goals">
              {personals.map((personal) => (
                <PersonalItem key={personal._id} personal={personal} />
              ))}
            </div>
          ) : (
            <>
              <h3>You have not created any eduction history</h3>
              <button type="submit" className="btn">
                {newFunction('/personal')}
              </button>
            </>
          )}
      </div>
      </section>
      </div>
      </Fragment>
  )

  function newFunction(newLocal) {
    return <Link to={newLocal}>Submit</Link>;
  }
}
