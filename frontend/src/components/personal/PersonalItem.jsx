import { useDispatch } from "react-redux";
import { deletePersonal } from "../../features/personals/personalSlice";

function PersonalItem({ personal }) {
  const dispatch = useDispatch();


  return (
    <div className="goal">
      <div>{new Date(personal.createdAt).toLocaleString("en-US")}</div>
      <h2>{personal.state}</h2>
      <h2>{personal.city}</h2>
      <h2>{personal.linkedIn}</h2>
      <h2>{personal.gitHub}</h2>
      <button
        onClick={() => dispatch(deletePersonal(personal._id))}
        className="close"
      >
        X
      </button>
    </div>
  );
}

export default PersonalItem;
