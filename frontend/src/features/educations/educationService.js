import axios from 'axios'

const API_URL = '/api/educations/'

// Create new education
const createEducation = async (educationData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, educationData, config)

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
  deleteEducation,
}

export default educationService