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
<p class='rContactInfo'>{user.email}</p>
      <p class='rContactInfo'>{user.phone}</p>
      <p class='rContactInfo'>{personal.state}, {personal.city}</p>
      <p class='rContactInfo'>{personal.linkedIn} {personal.gitHub}</p>
      <hr></hr>
      <div class='rBody'>
      <h3>Professional Experience</h3>
      <p class='rtab'>{experience.companyName},{experience.jobTitle}, {experience.location}</p>
      <p class='rtab'>({experience.startedAt} until {experience.endedAt})</p>
      <ul class='rbullet'>{experience.jobDescription}</ul>
      <h3>Education</h3>
      <p class='rtab'>{education.schoolName}</p>
      <p class='rtab'>({education.degree})</p>
      <p class='rtab'>{education.degreMajor}</p>
      <p class='rtab'>{education.startedAt}</p>
      <p class='rtab'>{education.endedAt}</p>
      <p class='rtab'>{extra.gpa}</p>
      <h3>Proficiencies</h3>
      <ul class='rtab'>{extra.courseWork}</ul>
      </div>
      <hr></hr>
      <h3>References</h3>  
      </div>: <h4>No available information currently</h4>
    }
    <div>
      <button className='btn btn-print' onClick={generatePdf}>Export to PDf</button>
      <button className='btn btn-print' onClick={clearData}>Clear data</button>
    </div>
    </>
  );
}
