import React, { useState, useEffect } from 'react';
import './ed.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EducationCard from './EducationCard';


function ShowEducationList() {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/educations')
      .then((res) => {
        setEducations(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowEducationList');
      });
  }, []);

  const educationList =
    educations.length === 0
      ? 'there are no educations on record!'
      : educations.map((education, k) => <EducationCard education={education} key={k} />);

  return (
    <div className='ShowBookList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Education List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-education'
              className='btn btn-outline-warning float-right'
            >
              + Add New Education
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{educationList}</div>
      </div>
    </div>
  );
}

export default ShowEducationList;