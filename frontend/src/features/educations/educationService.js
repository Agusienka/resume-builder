import axios from 'axios'

axios.defaults.baseURL = "http://localhost:5000/"

const API_URL = '/api/educations/'

// Create new education
const createEducation = async (educationData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(API_URL, educationData, config)
  console.log("responseee", response.data)
  localStorage.setItem("user_education_details", JSON.stringify(response.data))
  window.location.href = "/forms";
  return response.data
}

// Get user education
const getEducations = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)
  console.log("response", response.data)

  return response.data
}

//update user education
const updateEducation = async (educationId, token) => {
  const config = {
    headers: {
      Authorization:`Bearer ${token}`,
    },
  }
  const response = await axios.put(API_URL, educationId, config)
  return response.data
}


// Delete user education
const deleteEducation = async (educationId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + educationId, config)

  return response.data
}

const educationService = {
  createEducation,
  getEducations,
  updateEducation,
  deleteEducation,
}

export default educationService