import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import EducationForm from './components/EducationForm'
import PersonalForm from './components/PersonalForm'
import ExperienceForm from './components/ExperienceForm'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import ResumeForms from './components/ResumeForms'


function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/education' element={<EducationForm />} />
            <Route path = '/personal' element={<PersonalForm />} />
            <Route path='/experience' element={<ExperienceForm />} />
            <Route path='/resumeforms' element={<ResumeForms />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App