import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate,  } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'





function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
      <div className='logo '>
        <Link to='/'className='link'>Notes</Link>
      </div>
   
      <ul>
        {user ? (
          <>
           <li>
            <Link to='/' className='link'> Dashboard
            </Link>
          </li>
          <li>
            <Link to='/resume-data' className='link'> Resume data
            </Link>
          </li>

          <li>
            <Link to='/forms' className='link'> Resume Forms
            </Link>
          </li>
          <li>
            <button className='btn link' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header