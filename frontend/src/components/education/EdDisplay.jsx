import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../Spinner";
import { getEducations, reset } from "../../features/educations/educationSlice";
import EducationItem from "./EducationItem";

function EdDisplay() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { educations, isLoading, isError, message } = useSelector(
    (state) => state.educations
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getEducations());
    console.log(getEducations);

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
                <Link to="/education">Submit</Link>
              </button>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default EdDisplay;

// import { useNavigate, Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import EducationForm from "../components/EducationForm";
// import Spinner from "../components/Spinner";
// import { getEducations, reset } from "../features/educations/educationSlice";
// import { getPersonals } from "../features/personals/personalSlice";
// import EducationItem from "./EducationItem";
// import PersonalItem from "./PersonalItem";

// function ResumeForms() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { user } = useSelector((state) => state.auth)
//   const { educations, personals, isLoading, isError, message } = useSelector(
//     (state) => state.educations & state.personals
//   )

//   const onSubmit =() =>{
//     navigate('/resumeforms')
//   }
//   useEffect(() => {
//     if (isError) {
//       console.log(message)
//     }

//     if (!user) {
//       navigate('/login')
//     }

//     dispatch(getEducations())
//     dispatch(getPersonals())

//     return () => {
//       dispatch(reset())
//     }
//   }, [user, navigate, isError, message, dispatch])

//   if (isLoading) {
//     return <Spinner />
//   }

//   return (
//     <>
//       <section className="content">
//         <div className="form-group">
//           {educations.length > 0 ? (
//             <div className="goals">
//               {educations.map((education) => (
//                 <EducationItem key={education._id} education={education} />
//               ))}
//             </div>
//           ) : (
//             <>
//             <h3>You have not created any eduction history</h3>
//             <button type= 'submit' className='btn' onClick={() => navigate('/education')} >

//             </button>
//             </>
//           )}
//         </div>
//       </section>
//       <section className="content">
//         <div className="form-group">
//           {personals.length > 0 ? (
//             <div className="goals">
//               {personals.map((personal) => (
//                 <PersonalItem key={personal._id} personal={personal} />
//               ))}
//             </div>
//           ) : (
//             <>
//             <h3>You have not created any personal info</h3>
//             <button type= 'submit' className='btn' onClick={() => navigate('/personal')} >

//             </button>
//             </>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }

// export default ResumeForms;