import { useDispatch } from "react-redux";
import { deleteExperience } from "../../features/experiences/experienceSlice";

function ExperienceItem({ experience }) {
  const dispatch = useDispatch();
  console.log(experience);

  return (
    <div className="goal">
      <div>{new Date(experience.createdAt).toLocaleString("en-US")}</div>
      <h2>{experience.jobTitle}</h2>
      <h2>{experience.companyName}</h2>
      <h2>{experience.jobDescription}</h2>
      <h2>{experience.location}</h2>
      <h2>{experience.startedAt}</h2>
      <h2>{experience.endedAt}</h2>
      <button
        onClick={() => dispatch(deleteExperience(experience._id))}
        className="close"
      >
        X
      </button>
    </div>
  );
}

export default ExperienceItem;
