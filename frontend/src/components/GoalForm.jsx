import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'

function GoalForm() {
  const [text, setText] = useState({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
})

  const { firstName, lastName, email, phone } = text
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createGoal({ text }))
    setText('')
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
        <label htmlFor='text'>First Name</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        <div className='form-group'>
        <label htmlFor='text'>Last Name</label>
            <input
              type='text'
              className='form-control'
              id='lastName'
              name='lastName'
              value={lastName}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        <div className='form-group'>
        <label htmlFor='text'>Email</label>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className='form-group'>
          <label htmlFor='text'>Phone Number</label>
            <input
              type='text'
              className='form-control'
              id='phone'
              name='phone'
              value={phone}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Submit Personal Information 
          </button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm
