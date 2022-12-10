import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FaSchool } from 'react-icons/fa'
import { createEducation } from '../features/educations/educationSlice'


function EducationForm() {
  
  const [formData, setFormData] = useState({
    degree: '',
    degreeMajor: '',
    schoolName: '',
    location: '',
    startedAt: '',
    endedAt: '',
  })

  const { degree, degreeMajor, schoolName, location, startedAt, endedAt} = formData
  const dispatch = useDispatch()

const onChange = (e) => {
  setFormData((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,

  }))
}

const onSubmit = (e) => {
  e.preventDefault()

  dispatch(createEducation(formData))
  setFormData('')
}


  

    
      // const educationData = {
      //   degree, 
      //   degreeMajor, 
      //   schoolName, 
      //   location, 
      //   startedAt, 
      //   endedAt
  
      // }


    
  
  
  return (
    <>
    <section className='heading'>
      <h1>
        <FaSchool /> Education
      </h1>
      <p>Please create Education form</p>
    </section>

    <section className='form'>
      <form onSubmit={onSubmit}>
      <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='degree'
            name='degree'
            value={degree}
            placeholder='Provide your degree'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='degreeMajor'
            name='degreeMajor'
            value={degreeMajor}
            placeholder='Enter your degree major'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='schoolName'
            name='schoolName'
            value={schoolName}
            placeholder='School name'
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
            placeholder='Enter location of your school'
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
            Submit
          </button>
        </div>
      </form>
    </section>
  </>
)
  }

export default EducationForm
