import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../Spinner";
import { getExtras, reset } from "../../features/extras/extraSlice";
import ExtraItem from "./ExtraItem";

function ExtraDisplay() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { extras, isLoading, isError, message } = useSelector(
    (state) => state.extras
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getExtras());
    console.log(getExtras);

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
        <div className="form-group">
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
                <Link to="/extra">Submit</Link>
              </button>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default ExtraDisplay;