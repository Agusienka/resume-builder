import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../Spinner";
import { getPersonals, reset } from "../../features/personals/personalSlice";
import PersonalItem from "./PersonalItem";

function PersonalDisplay() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { personals, isLoading, isError, message } = useSelector(
    (state) => state.personals
  );
  

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getPersonals());
    console.log(getPersonals);

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
                <Link to="/resumeforms">Submit</Link>
              </button>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default PersonalDisplay;
