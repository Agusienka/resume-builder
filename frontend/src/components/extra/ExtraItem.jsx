import { useDispatch } from "react-redux";
import { deleteExtra } from "../../features/extras/extraSlice";

function ExtraItem({ extra}) {
  const dispatch = useDispatch();

  return (
    <div className="goal">
      <div>{new Date(extra.createdAt).toLocaleString("en-US")}</div>
      <h2>{extra.gpa}</h2>
      <h2>{extra.academicHonors}</h2>
      <h2>{extra.courseWork}</h2>
      <button
        onClick={() => dispatch(deleteExtra(extra._id))}
        className="close"
      >
        X
      </button>
    </div>
  );
}

export default ExtraItem;