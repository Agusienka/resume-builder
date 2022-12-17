import axios from 'axios'

const API_URL = '/api/extras/'

// Create new extra
const createExtra = async (extraData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, extraData, config)
  localStorage.setItem("user_extra_details", JSON.stringify(response.data))
  window.location.href = "/forms";
  return response.data
}

// Get user extra
const getExtras = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

//update user extra
const updateExtra = async (extraId, token) => {
  const config = {
    headers: {
      Authorization:`Bearer ${token}`,
    },
  }
  const response = await axios.put(API_URL, extraId, config)
  return response.data
}


// Delete user extra
const deleteExtra = async (extraId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + extraId, config)

  return response.data
}

const extraService = {
  createExtra,
  getExtras,
  updateExtra,
  deleteExtra,
}

export default extraService