import apiClient from './api'
import hospitalsData from '../data/hospitals.json'

/**
 * Hospital Service
 * Handles all hospital-related API calls and operations
 */

/**
 * Get all hospitals
 * @returns {Promise} List of all hospitals
 */
export const getAllHospitals = async () => {
  try {
    // Using local dummy data for demonstration
    return Promise.resolve(hospitalsData)
  } catch (error) {
    throw error
  }
}

/**
 * Get hospital by ID
 * @param {number} hospitalID - Hospital ID
 * @returns {Promise} Hospital data
 */
export const getHospitalById = async (hospitalID) => {
  try {
    const hospital = hospitalsData.find((h) => h.id === parseInt(hospitalID))
    return Promise.resolve(hospital)
  } catch (error) {
    throw error
  }
}

/**
 * Update blood availability
 * @param {number} hospitalID - Hospital ID
 * @param {object} bloodData - Blood inventory data to update
 * @returns {Promise} Updated blood inventory
 */
export const updateBloodAvailability = async (hospitalID, bloodData) => {
  try {
    const response = await apiClient.put(`/hospitals/${hospitalID}/blood-availability`, bloodData)
    return response.data
  } catch (error) {
    throw error.response?.data || error
  }
}

/**
 * Get blood availability for hospital
 * @param {number} hospitalID - Hospital ID
 * @returns {Promise} Blood inventory status
 */
export const getBloodAvailability = async (hospitalID) => {
  try {
    const response = await apiClient.get(`/hospitals/${hospitalID}/blood-availability`)
    return response.data
  } catch (error) {
    throw error.response?.data || error
  }
}

/**
 * Broadcast emergency blood request
 * @param {number} hospitalID - Hospital ID
 * @param {object} requestData - Emergency request details
 * @returns {Promise} Broadcast confirmation
 */
export const broadcastEmergencyRequest = async (hospitalID, requestData) => {
  try {
    const response = await apiClient.post(`/hospitals/${hospitalID}/emergency-request`, requestData)
    return response.data
  } catch (error) {
    throw error.response?.data || error
  }
}

/**
 * Get emergency requests
 * @param {number} hospitalID - Hospital ID
 * @returns {Promise} List of emergency requests
 */
export const getEmergencyRequests = async (hospitalID) => {
  try {
    const response = await apiClient.get(`/hospitals/${hospitalID}/emergency-requests`)
    return response.data
  } catch (error) {
    throw error.response?.data || error
  }
}

/**
 * Verify donor schedule
 * @param {number} hospitalID - Hospital ID
 * @param {number} donorID - Donor ID
 * @returns {Promise} Donor appointment verification
 */
export const verifyDonorSchedule = async (hospitalID, donorID) => {
  try {
    const response = await apiClient.get(`/hospitals/${hospitalID}/verify-donor/${donorID}`)
    return response.data
  } catch (error) {
    throw error.response?.data || error
  }
}

/**
 * Check donor eligibility
 * @param {number} hospitalID - Hospital ID
 * @param {number} donorID - Donor ID
 * @returns {Promise} Donor eligibility status
 */
export const checkDonorEligibility = async (hospitalID, donorID) => {
  try {
    const response = await apiClient.get(`/hospitals/${hospitalID}/check-eligibility/${donorID}`)
    return response.data
  } catch (error) {
    throw error.response?.data || error
  }
}

/**
 * Update hospital profile
 * @param {number} hospitalID - Hospital ID
 * @param {object} updateData - Profile update data
 * @returns {Promise} Updated hospital data
 */
export const updateHospitalProfile = async (hospitalID, updateData) => {
  try {
    const response = await apiClient.put(`/hospitals/${hospitalID}`, updateData)
    return response.data
  } catch (error) {
    throw error.response?.data || error
  }
}

export default {
  getAllHospitals,
  getHospitalById,
  updateBloodAvailability,
  getBloodAvailability,
  broadcastEmergencyRequest,
  getEmergencyRequests,
  verifyDonorSchedule,
  checkDonorEligibility,
  updateHospitalProfile,
}
