import axios from 'axios'

const API_URL = '/api/experiences/'

// Create new experience
const createExperience = async (experienceData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, experienceData, config)

  return response.data
}

// Get user experience
const getExperiences = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

//update user experience
const updateExperience = async (experienceId, token) => {
  const config = {
    headers: {
      Authorization:`Bearer ${token}`,
    },
  }
  const response = await axios.put(API_URL, experienceId, config)
  return response.data
}


// Delete user experience
const deleteExperience = async (experienceId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + experienceId, config)

  return response.data
}

const experienceService = {
  createExperience,
  getExperiences,
  updateExperience,
  deleteExperience,
}

export default experienceService