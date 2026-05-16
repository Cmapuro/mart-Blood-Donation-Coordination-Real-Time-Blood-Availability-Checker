import apiClient from './api'
import bloodInventoryData from '../data/bloodInventory.json'

/**
 * Blood Service
 * Handles all blood-related API calls and operations
 */

/**
 * Search blood availability
 * @param {string} bloodType - Blood type to search (e.g., 'O+', 'A-')
 * @param {string} location - Location/city to search
 * @returns {Promise} Available blood units
 */
export const searchBloodAvailability = async (bloodType, location) => {
  try {
    // Using local dummy data for demonstration
    const results = bloodInventoryData.filter((item) => item.bloodType === bloodType)
    return Promise.resolve(results)
  } catch (error) {
    throw error
  }
}

/**
 * Get blood types
 * @returns {Promise} List of all blood types
 */
export const getBloodTypes = async () => {
  try {
    const response = await apiClient.get('/blood/types')
    return response.data
  } catch (error) {
    throw error.response?.data || error
  }
}

/**
 * Get blood inventory statistics
 * @returns {Promise} Blood inventory stats
 */
export const getBloodInventoryStats = async () => {
  try {
    const response = await apiClient.get('/blood/inventory-stats')
    return response.data
  } catch (error) {
    throw error.response?.data || error
  }
}

/**
 * Check critical blood levels
 * @returns {Promise} Critical blood units
 */
export const getCriticalBlood = async () => {
  try {
    const response = await apiClient.get('/blood/critical')
    return response.data
  } catch (error) {
    throw error.response?.data || error
  }
}

/**
 * Get blood expiry notifications
 * @returns {Promise} Expiring blood units
 */
export const getExpiringBlood = async () => {
  try {
    const response = await apiClient.get('/blood/expiring')
    return response.data
  } catch (error) {
    throw error.response?.data || error
  }
}

export default {
  searchBloodAvailability,
  getBloodTypes,
  getBloodInventoryStats,
  getCriticalBlood,
  getExpiringBlood,
}
