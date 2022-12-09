import axios from 'axios'

const API_URL = '/api/personals/'

// Create new personal fact
const createPersonal = async (personalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, personalData, config)

  return response.data
}

// Get user personal facts
const getPersonals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user personal facts
const deletePersonal = async (personalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + personalId, config)

  return response.data
}

const personalService = {
  createPersonal,
  getPersonals,
  deletePersonal,
}

export default personalService