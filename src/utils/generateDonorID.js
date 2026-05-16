/**
 * Donor ID Generator Utility
 * Generates unique donor IDs in the format: DONOR-XXXXXX (6 random digits)
 */

/**
 * Generate a unique donor ID
 * Format: DONOR-XXXXXX (where X is a random digit)
 * Example: DONOR-483920
 * @returns {string} Generated donor ID
 */
export const generateDonorID = () => {
  const randomNumber = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, '0');
  return `DONOR-${randomNumber}`;
};

/**
 * Validate if a string is a valid donor ID format
 * @param {string} donorID - The donor ID to validate
 * @returns {boolean} True if valid donor ID format
 */
export const isValidDonorID = (donorID) => {
  const donorIDPattern = /^DONOR-\d{6}$/;
  return donorIDPattern.test(donorID);
};

export default {
  generateDonorID,
  isValidDonorID,
};
