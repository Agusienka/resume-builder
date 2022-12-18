import { Link } from "react-router-dom";
import ResumeData from "./ResumeData";
import {useSelector} from "react-redux";
import {createRef, useRef} from "react";
import jsPDF from 'jspdf';

export default function ResumeForms() {

  const education = JSON.parse(localStorage.getItem("user_education_details"));
  const experience = JSON.parse(localStorage.getItem("user_experience_details"));
  const extra = JSON.parse(localStorage.getItem("user_extra_details"));
  const personal = JSON.parse(localStorage.getItem("user_personal_details"));
  const { user } = useSelector((state) => state.auth)
  const ref = createRef();
  const pdfState = useRef(null);

  const clearData = () => {
    localStorage.clear();
    window.location.reload();
  }

  const generatePdf = () => {
    const doc = new jsPDF({
      format: 'a4',
      unit: 'px'
    })

    doc.html(pdfState.current, {
      async callback(doc) {
        await doc.save('document')
      }
    })
  }

  return (
    <>
    {
      education && experience && extra && personal ? <div ref = {pdfState}>
<h1 class='rName'>{user.firstName} {user.lastName}</h1>
      <p class='rEmail'>{user.email}</p>
      <p class='rPhone'>{user.phone}</p>
      <p>{personal.state}, {personal.city}</p>
      <p>{personal.linkedIn} {personal.gitHub}</p>
      <hr></hr>
      <h3>Professional Experience</h3>
      <p>{experience.companyName},{experience.jobTitle}, {experience.location}</p>
      <p>({experience.startedAt} until {experience.endedAt})</p>
      <ul>{experience.jobDescription}</ul>
      <h3>Education</h3>
      <p>{education.schoolName}</p>
      <p>({education.degree})</p>
      <p>{education.degreMajor}</p>
      <p>{education.startedAt}</p>
      <p>{education.endedAt}</p>
      <p>Valley High School</p>
      <p>{extra.gpa}</p>
      <h3>Proficiencies</h3>
      <ul>{extra.courseWork}</ul>
      <ul>Proficient in VSCode</ul>
      <ul>Proficient in People Skills</ul>
      <hr></hr>
      <h3>References</h3>  
      </div>: <h4>No available information currently</h4>
    }
    <div>
      <button onClick={generatePdf}>Export to PDf</button>
      <button onClick={clearData}>Clear data</button>
    </div>
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
