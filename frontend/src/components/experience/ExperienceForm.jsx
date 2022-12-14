import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaIdCardAlt } from "react-icons/fa";
import { useNavigate,Link  } from 'react-router-dom'
import { useEffect } from 'react';
import { toast } from 'react-toastify'
import { createExperience, reset } from '../../features/experiences/experienceSlice'
import Spinner from '../Spinner'



function ExperienceForm() {
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    location: '',
    jobDescription: '',
    startedAt: '',
    endedAt: '',
  });

  const { jobTitle, companyName, location, jobDescription, startedAt, endedAt} = formData
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {experiences, isError, isSuccess, isLoading, message} = useSelector((state) => state.experiences)

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }
    if(isSuccess || experiences) {
      navigate('/experience')
    }
    dispatch(reset())
  }, [experiences, isError, isSuccess, isLoading, message, navigate, dispatch])

const onChange = (e) => {
  setFormData((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,

  }))
}

const onSubmit = (e) => {
  e.preventDefault()

  dispatch(createExperience(formData))
  setFormData('')

  const experienceData = {
    jobTitle,
    companyName,
    location,
    jobDescription,
    startedAt,
    endedAt,

  }
  dispatch(createExperience(experienceData))

  return () => {
    dispatch(reset());
  };
}
if (isLoading) {
  return <Spinner />
}
  return (
    <>
    <section className='heading'>
      <h1>
        Experience
      </h1>
      <FaIdCardAlt /> Job Experience
      <p>Please list job experience here</p>
    </section>

    <section className='form'>
      <form onSubmit={onSubmit}>
      <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='jobTitle'
            name='jobTitle'
            value={jobTitle}
            placeholder='Provide your job title'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='companyName'
            name='companyName'
            value={companyName}
            placeholder='Name of your current company'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='location'
            name='location'
            value={location}
            placeholder='Job location'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='jobDescription '
            name='jobDescription'
            value={jobDescription}
            placeholder='Enter job description'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='date'
            className='form-control'
            id='startedAt'
            name='startedAt'
            value={startedAt}
            placeholder='Enter start date MM/YYYY'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='date'
            className='form-control'
            id='endedAt'
            name='endedAt'
            value={endedAt}
            placeholder='Enter end date MM/YYYY'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <button type='submit' className='btn btn-block'>
          <Link to='/ex'>Submit</Link>
          </button>
        </div>
      </form>
    </section>
  </>
)
  }

export default ExperienceForm