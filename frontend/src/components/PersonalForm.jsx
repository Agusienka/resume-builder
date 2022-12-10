import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { useEffect } from 'react';
import { toast } from 'react-toastify'
import { createPersonal, reset } from '../features/personals/personalSlice'
import Spinner from './Spinner'



function PersonalForm() {
  
  const [formData, setFormData] = useState({
    state: '',
    city: '',
    linkedIn: '',
    gitHub:'',
  })

  const { state, city, linkedIn, gitHub} = formData
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {personals, isError, isSuccess, isLoading, message} = useSelector((state) => state.personals)

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }
    if(isSuccess || personals) {
      navigate('/personal')
    }
    dispatch(reset())
  }, [personals, isError, isSuccess, isLoading, message, navigate, dispatch])

const onChange = (e) => {
  setFormData((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,

  }))
}

const onSubmit = (e) => {
  e.preventDefault()

  const personalData = {
    state,
    city,
    linkedIn,
    gitHub,
    
  }
  dispatch(createPersonal(personalData))
}
if (isLoading) {
  return <Spinner />
}
  return (
    <>
    <section className='heading'>
      <h1>
         Personal Information
      </h1>
      <p>Please fill out your personal information</p>
    </section>

    <section className='form'>
      <form onSubmit={onSubmit}>
      <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='state'
            name='state'
            value={state}
            placeholder='State you live in'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='city'
            name='city'
            value={city}
            placeholder='City you live in'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='linkedIn'
            name='linkedIn'
            value={linkedIn}
            placeholder='Add your LinkedIn URL'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='gitHub'
            name='gitHub'
            value={gitHub}
            placeholder='Enter your GitHub URL'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <button type='submit' className='btn btn-block'>
          <Link to='/resumeforms'>Submit</Link>
          </button>
        </div>
      </form>
    </section>
  </>
)
  }

export default PersonalForm