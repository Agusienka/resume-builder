import { Link } from "react-router-dom";
import ResumeData from "./ResumeData";

export default function ResumeForms() {
  return (
    <>
      <div class='rHeader'>
      <h1 class='rName'>User McUser</h1>
        <div class='rContactInfo'>
        <p>user@user.com</p>
        <p>123-456-7890</p>
        </div>
        </div>
      <br/>
      <br/>
      <br/>
      <div class='rBody'>
      <hr></hr>
      <br/>
      <br/>
      <h3>Professional Experience</h3>
        <p class ='rtab'>Company Inc. (March 2022-December 2022)</p>
          <ul class ='rbullet'>Learned how to be a good worker</ul>
          <ul class ='rbullet'>Learned how to listen to boss</ul>
      <br/>
        <p class ='rtab'>Business Store (January 2021-January 2022)</p>
          <ul class ='rbullet'>Learned how to deal with people</ul>
          <ul class ='rbullet'>Ran a cash register</ul>
      <br/>
      <br/>
      <h3>Education</h3>
        <p class='rtab'>College University (GPA 3.5, Graduated June 2016)</p>
          <p class='rbullet'>Received a B.S. in Coding</p>
        <p class='rtab'>Valley High School (GPA 3.0, Graduated May 2020)</p>
      <br/>
      <br/>
      <h3>Proficiencies</h3>
        <ul class ='rtab'>Proficient in Excel</ul>
        <ul class ='rtab'>Proficient in VSCode</ul>
        <ul class ='rtab'>Proficient in People Skills</ul>
      <br/>
      <br/>
      </div>
      <hr></hr>
      <h3>References</h3>  
      <div class ='rReference'>
      <blockquote class='rRef1'>
          Guy Workman <br/>
          President of Company Inc. <br/>
          123-321-1234
      </blockquote>
      <blockquote class='rRef2'>
        John Smith <br/>
        Good Dude <br/>
        123-321-1235
      </blockquote>
      <blockquote class='rRef3'>
          Mary Martin <br/>
          College University Dean <br/>
          999-999-9999
      </blockquote>
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
