import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../../features/goals/goalSlice'

function GoalForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createGoal({ text }))
    setText('')
  }
/*Ask Chris*/
function printPage() {
  window.print('form')
}

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text' className="notes">Space for your notes/ToDo list</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Notes
          </button>
        </div>
        <div>
         
        </div>
      </form>
    </section>
  )
}

export default GoalForm
