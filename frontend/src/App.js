import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EducationForm from "./components/education/EducationForm";
import PersonalForm from "./components/personal/PersonalForm";
import ExperienceForm from "./components/experience/ExperienceForm";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EdDisplay from "./components/education/EdDisplay";
import PersonalDisplay from "./components/personal/PersonalDisplay";
import ExDisplay from "./components/experience/ExDisplay";
import ResumeForms from "./components/ResumeForms";
import ExtraDisplay from "./components/extra/ExtraDisplay";
import ExtraForm from "./components/extra/ExtraForm";
// import ResumeData from "./components/ResumeData";
// import useFetchJobs from "./components/muse/useFetchJobs";
// import JobSearch from "./components/muse/JobSearch";
// import SearchForm from "./components/muse/SearchForm";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/education" element={<EducationForm />} />
            <Route path="/personal" element={<PersonalForm />} />
            <Route path="/experience" element={<ExperienceForm />} />
            <Route path="/ed" element={<EdDisplay />} /> 
             <Route path="/per" element={<PersonalDisplay />} />
            <Route path="/ex" element={<ExDisplay />} />
            <Route path="/forms" element={<ResumeForms />} />
            <Route path="/exdisp" element={<ExtraDisplay />} />
            <Route path="/extra" element={<ExtraForm />} />
            {/* <Route path="/resumeforms" element={<ResumeData />} /> */}
            {/* <Route path="/jobs" element={<JobSearch />} />
            <Route path="/searchform" element={<SearchForm />} /> */}
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
