import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import { getGoals, reset } from '../features/goals/goalSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getGoals())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.firstName}</h1>
        <div className='form-group'>
        
            <button type='submit' className='btn btn-block'>
            <Link to='/education'>Education Form</Link>
            </button>
            <button type='submit' className='btn btn-block'>
            <Link to='/experience'>Experience Form</Link>
            </button>
            <button type='submit' className='btn btn-block'>
            <Link to='/personal'>Personal Information Form</Link>  
            </button>
        </div>

      </section>

    </>
  )
}

export default Dashboard