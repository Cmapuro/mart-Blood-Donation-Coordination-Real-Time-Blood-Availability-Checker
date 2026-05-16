import { useState, useEffect } from 'react'
import axios from 'axios'

/**
 * Custom hook for fetching data from API endpoints
 * Handles loading, error states, and automatic retry logic
 *
 * @param {string} url - API endpoint URL
 * @param {object} options - Fetch options
 * @param {object} options.headers - Custom headers
 * @param {string} options.method - HTTP method (GET, POST, etc.)
 * @param {object} options.body - Request body (for POST, PUT, etc.)
 * @param {number} options.retries - Number of retries on failure (default: 0)
 * @param {boolean} options.skip - Skip fetching if true
 *
 * @returns {object} Fetch state object
 * @returns {any} returns.data - Fetched data
 * @returns {boolean} returns.loading - Loading state
 * @returns {Error} returns.error - Error object if fetch fails
 * @returns {function} returns.refetch - Function to manually refetch data
 *
 * @example
 * const { data, loading, error, refetch } = useFetch('/api/donors')
 */
export const useFetch = (url, options = {}) => {
  // State for fetched data
  const [data, setData] = useState(null)

  // State for loading indicator
  const [loading, setLoading] = useState(false)

  // State for error handling
  const [error, setError] = useState(null)

  // State for retry count
  const [retryCount, setRetryCount] = useState(0)

  // Extract options with defaults
  const {
    headers = {},
    method = 'GET',
    body = null,
    retries = 0,
    skip = false,
  } = options

  /**
   * Fetch data from API
   */
  const fetchData = async () => {
    // Skip fetching if skip option is true
    if (skip) return

    setLoading(true)
    setError(null)

    try {
      const config = {
        url,
        method,
        headers,
      }

      // Add body for POST, PUT, PATCH requests
      if (body && method !== 'GET') {
        config.data = body
      }

      const response = await axios(config)
      setData(response.data)
      setError(null)
      setRetryCount(0)
    } catch (err) {
      // Retry logic
      if (retryCount < retries) {
        setRetryCount((prev) => prev + 1)
        // Wait before retrying (exponential backoff)
        setTimeout(fetchData, Math.pow(2, retryCount) * 1000)
      } else {
        const errorMsg = err.response?.data?.message || err.message || 'Fetch failed'
        setError(new Error(errorMsg))
        setData(null)
      }
    } finally {
      setLoading(false)
    }
  }

  /**
   * Effect to fetch data on mount and when dependencies change
   */
  useEffect(() => {
    fetchData()
  }, [url])

  /**
   * Manual refetch function
   */
  const refetch = async () => {
    setRetryCount(0)
    await fetchData()
  }

  return {
    data,
    loading,
    error,
    refetch,
  }
}

export default useFetch
