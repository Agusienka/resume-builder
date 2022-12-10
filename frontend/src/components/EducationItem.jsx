import { useDispatch } from 'react-redux'
import { deleteEducation } from '../features/educations/educationSlice'

function EducationItem({ education }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <div>{new Date(education.createdAt).toLocaleString('en-US')}</div>
      <h2>{education.degree}</h2>
      <h2>{education.degreeMajor}</h2>
      <h2>{education.schoolName}</h2>
      <h2>{education.location}</h2>
      <h2>{education.startedAt}</h2>
      <h2>{education.endedAt}</h2>
      <button onClick={() => dispatch(deleteEducation(education._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default EducationItem