import apiClient from './api'

/**
 * Admin Service
 * Handles all admin-related API calls and operations
 */

/**
 * Get dashboard statistics
 * @returns {Promise} Dashboard statistics
 */
export const getDashboardStats = async () => {
  try {
    const response = await apiClient.get('/admin/dashboard')
    return response.data
  } catch (error) {
    throw error.response?.data || error
  }
}

/**
 * Manage hospitals - Get all hospitals
 * @returns {Promise} List of all hospitals
 */
export const getHospitals = async () => {
  try {
    const response = await apiClient.get('/admin/hospitals')
    return response.data
  } catch (error) {
    throw error.response?.data || error
  }
}

/**
 * Add new hospital
 * @param {object} hospitalData - Hospital data
 * @returns {Promise} Created hospital data
 */
export const addHospital = async (hospitalData) => {
  try {
    const response = await apiClient.post('/admin/hospitals', hospitalData)
    return response.data
  } catch (error) {
    throw error.response?.data || error
  }
}

/**
 * Update hospital information
 * @param {number} hospitalID - Hospital ID
 * @param {object} updateData - Data to update
 * @returns {Promise} Updated hospital data
 */
export const updateHospital = async (hospitalID, updateData) => {
  try {
    const response = await apiClient.put(`/admin/hospitals/${hospitalID}`, updateData)
    return response.data
  } catch (error) {
    throw error.response?.data || error
  }
}

/**
 * Delete hospital
 * @param {number} hospitalID - Hospital ID
 * @returns {Promise} Deletion response
 */
export const deleteHospital = async (hospitalID) => {
  try {
    const response = await apiClient.delete(`/admin/hospitals/${hospitalID}`)
    return response.data
  } catch (error) {
    throw error.response?.data || error
  }
}

/**
 * Get all donors
 * @returns {Promise} List of all donors
 */
export const getDonors = async () => {
  try {
    const response = await apiClient.get('/admin/donors')
    return response.data
  } catch (error) {
    throw error.response?.data || error
  }
}

/**
 * Update donor information
 * @param {number} donorID - Donor ID
 * @param {object} updateData - Data to update
 * @returns {Promise} Updated donor data
 */
export const updateDonor = async (donorID, updateData) => {
  try {
    const response = await apiClient.put(`/admin/donors/${donorID}`, updateData)
    return response.data
  } catch (error) {
    throw error.response?.data || error
  }
}

/**
 * Suspend donor account
 * @param {number} donorID - Donor ID
 * @returns {Promise} Suspension response
 */
export const suspendDonor = async (donorID) => {
  try {
    const response = await apiClient.post(`/admin/donors/${donorID}/suspend`)
    return response.data
  } catch (error) {
    throw error.response?.data || error
  }
}

/**
 * Get blood inventory management data
 * @returns {Promise} Blood inventory data
 */
export const getBloodInventory = async () => {
  try {
    const response = await apiClient.get('/admin/blood-inventory')
    return response.data
  } catch (error) {
    throw error.response?.data || error
  }
}

/**
 * Update blood inventory
 * @param {number} inventoryID - Inventory ID
 * @param {object} updateData - Data to update
 * @returns {Promise} Updated inventory data
 */
export const updateBloodInventory = async (inventoryID, updateData) => {
  try {
    const response = await apiClient.put(`/admin/blood-inventory/${inventoryID}`, updateData)
    return response.data
  } catch (error) {
    throw error.response?.data || error
  }
}

/**
 * Get emergency requests for monitoring
 * @returns {Promise} List of emergency requests
 */
export const getEmergencyRequests = async () => {
  try {
    const response = await apiClient.get('/admin/emergency-requests')
    return response.data
  } catch (error) {
    throw error.response?.data || error
  }
}

/**
 * Get reports and analytics
 * @param {object} filters - Filter criteria (dateRange, hospitalID, etc.)
 * @returns {Promise} Reports data
 */
export const getReports = async (filters = {}) => {
  try {
    const response = await apiClient.get('/admin/reports', { params: filters })
    return response.data
  } catch (error) {
    throw error.response?.data || error
  }
}

/**
 * Export reports
 * @param {string} format - Export format (csv, pdf, excel)
 * @returns {Promise} Exported file
 */
export const exportReports = async (format = 'csv') => {
  try {
    const response = await apiClient.get(`/admin/reports/export?format=${format}`, {
      responseType: 'blob',
    })
    return response.data
  } catch (error) {
    throw error.response?.data || error
  }
}

export default {
  getDashboardStats,
  getHospitals,
  addHospital,
  updateHospital,
  deleteHospital,
  getDonors,
  updateDonor,
  suspendDonor,
  getBloodInventory,
  updateBloodInventory,
  getEmergencyRequests,
  getReports,
  exportReports,
}
