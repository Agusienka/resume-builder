import { Link } from "react-router-dom";
import ResumeData from "./ResumeData";
import {useSelector} from "react-redux"

export default function ResumeForms() {

  const education = JSON.parse(localStorage.getItem("user_education_details"));

  // const { educations } = useSelector(
  //   (state) => state.educations
  // );

  console.log("returned data", education);

  return (
    <>
    {
      education ? <div>
<h1 class='rName'>{education.degree}</h1>
      <p class='rEmail'>user@user.com</p>
      <p class='rPhone'>123-456-7890</p>
      <hr></hr>
      <h3>Professional Experience</h3>
      <p>Company Inc.</p>
      <p>(March 2022-December 2022)</p>
      <ul>Learned how to be a good worker</ul>
      <ul>Learned how to listen to boss</ul>
      <h3>Education</h3>
      <p>College University</p>
      <p>(GPA 3.5, Graduated June 2016)</p>
      <p>Valley High School</p>
      <p>(GPA 3.0, Graduated May 2020)</p>
      <h3>Proficiencies</h3>
      <ul>Proficient in Excel</ul>
      <ul>Proficient in VSCode</ul>
      <ul>Proficient in People Skills</ul>
      <hr></hr>
      <h3>References</h3>  
      </div>: <h4>No available information currently</h4>
    }
      
    </>
  );
}

/*<div className="heading">
        <h1 className="heading">This is where the degree goes.</h1>
      </div>
      <div>
        <h1 className="heading">
          <Link to="/personal">Personal Form</Link>
        </h1>
      </div>
      <div>
        <h1 className="heading">
          <Link to="/education">Education Form</Link>
        </h1>
      </div>
      <div>
        <h1 className="heading">
          <Link to="/extra">Extras Form</Link>
        </h1>
      </div>*/
