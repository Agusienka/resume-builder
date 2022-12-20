import React from 'react';
import { Link } from 'react-router-dom';
import './ed.css';

const EducationCard = (props) => {
  const education = props.education;

  return (
    <div className='card-container'>
      <img
        src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
        alt='Books'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-education/${education._id}`}>{education.location}</Link>
        </h2>
        <h3>{education.degree}</h3>
        <p>{education.degreeMajor}</p>
        <p>{education.schoolName}</p>
        <p>{education.location}</p>
        <p>{education.startedAt}</p>
        <p>{education.endedAt}</p>
      </div>
    </div>
  );
};

export default EducationCard;