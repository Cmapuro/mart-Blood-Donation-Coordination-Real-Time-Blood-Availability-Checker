/**
 * Form Validators Utility
 * Contains validation functions for form inputs across the application
 */

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email format
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate password strength
 * Requires: at least 6 characters
 * @param {string} password - Password to validate
 * @returns {boolean} True if password meets minimum requirements
 */
export const validatePassword = (password) => {
  return password && password.length >= 6;
};

/**
 * Validate phone number format
 * Accepts formats: 1234567890 or +1234567890 or (123) 456-7890
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid phone format
 */
export const validatePhone = (phone) => {
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Validate required field (not empty)
 * @param {string} value - Value to validate
 * @returns {boolean} True if value is not empty
 */
export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

/**
 * Validate name format (letters and spaces only)
 * @param {string} name - Name to validate
 * @returns {boolean} True if valid name format
 */
export const validateName = (name) => {
  const nameRegex = /^[a-zA-Z\s]+$/;
  return nameRegex.test(name);
};

/**
 * Validate age (must be between 16 and 65 for blood donation)
 * @param {number} age - Age to validate
 * @returns {boolean} True if age is valid for blood donation
 */
export const validateAge = (age) => {
  const ageNum = parseInt(age);
  return ageNum >= 16 && ageNum <= 65;
};

/**
 * Validate blood type format
 * Valid blood types: O+, O-, A+, A-, B+, B-, AB+, AB-
 * @param {string} bloodType - Blood type to validate
 * @returns {boolean} True if valid blood type
 */
export const validateBloodType = (bloodType) => {
  const validTypes = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];
  return validTypes.includes(bloodType);
};

/**
 * Validate form field (generic validation)
 * @param {string} field - Field name
 * @param {string} value - Field value
 * @returns {string} Error message, empty string if valid
 */
export const validateField = (field, value) => {
  if (!validateRequired(value)) {
    return `${field} is required`;
  }

  if (field.toLowerCase().includes('email') && !validateEmail(value)) {
    return 'Invalid email format';
  }

  if (field.toLowerCase().includes('phone') && !validatePhone(value)) {
    return 'Invalid phone format';
  }

  if (field.toLowerCase().includes('password') && !validatePassword(value)) {
    return 'Password must be at least 6 characters';
  }

  return '';
};

export default {
  validateEmail,
  validatePassword,
  validatePhone,
  validateRequired,
  validateName,
  validateAge,
  validateBloodType,
  validateField,
};
