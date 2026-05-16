import axios from 'axios'

/**
 * API Configuration and Axios Instance
 * Handles all HTTP requests to the backend API
 * In a real application, this would connect to an actual backend server
 */

// Base URL for API requests
// In production, this would be your actual backend server URL
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api'

/**
 * Create Axios instance with default configuration
 */
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Request timeout (10 seconds)
  headers: {
    'Content-Type': 'application/json',
  },
})

/**
 * Request Interceptor
 * Adds authentication token to every request if available
 */
apiClient.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const token = localStorage.getItem('authToken')

    // Add token to Authorization header if available
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/**
 * Response Interceptor
 * Handles common errors and token expiration
 */
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 Unauthorized (token expired)
    if (error.response?.status === 401) {
      // Clear stored token
      localStorage.removeItem('authToken')
      localStorage.removeItem('user')

      // Redirect to login page
      window.location.href = '/donor/login'
    }

    return Promise.reject(error)
  }
)

export default apiClient
