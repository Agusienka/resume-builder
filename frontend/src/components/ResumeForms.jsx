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
      education && experience && extra && personal ? <div ref = {pdfState} className = "resume">
<h1 class='rName'>{user.firstName} {user.lastName}</h1>
      <div class='rRight'>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{personal.city}, {personal.state}</p>
      <p>{personal.linkedIn} {personal.gitHub}</p>
      </div>
      <br />
      <br />
      <br />
      <hr></hr>
      <hr></hr>
      <div class='rBody'>
      <br />
<div class='rExperience'>
  <h3>Professional Experience</h3>
      <p class='rRight'>({experience.startedAt} until {experience.endedAt})</p>
      <p class='rtab'>{experience.companyName}</p>
      <p class='rItalic'>{experience.jobTitle} in {experience.location}</p>
      <ul class='rbullet'>-{experience.jobDescription}</ul>
</div>
      <br />
      <br />
<div class='rEducation'>
      <h3>Education</h3>
      <p class='rRight'>(Enrolled on {education.startedAt}, Graduated on {education.endedAt})</p>
      <p class='rtab'>{education.schoolName}</p>
      <p class='rItalic'>({education.degree} in {education.degreeMajor})</p>
      <p class='rtab'>{extra.gpa}</p>
</div>
      <br />
      <br />
<div class='rSkills'>
      <h3>Proficiencies</h3>
      <ul class='rItalic'>{extra.courseWork}</ul>
      </div>
</div>
      <br />
      <br />
      <hr></hr>
      </div>: <h4>No available information currently</h4>
    }
    <div>
      <button className='btn btn-print' onClick={generatePdf}>Export to PDf</button>
      <button className='btn btn-print' onClick={clearData}>Clear data</button>
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