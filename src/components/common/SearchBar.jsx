import React, { useState } from 'react'

/**
 * SearchBar Component
 * Reusable search input component
 * Features: search icon, clear button, onChange callback
 */
export function SearchBar({
  placeholder = 'Search...',
  value = '',
  onChange,
  onClear,
  onSearch,
}) {
  // Local state for input value
  const [searchValue, setSearchValue] = useState(value)

  // Handle input change
  const handleChange = (e) => {
    const newValue = e.target.value
    setSearchValue(newValue)
    onChange?.(newValue)
  }

  // Handle clear button
  const handleClear = () => {
    setSearchValue('')
    onClear?.()
    onChange?.('')
  }

  // Handle search submit
  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch?.(searchValue)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          🔍
        </div>
        <input
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder={placeholder}
          className="form-control pl-10 pr-10 w-full"
        />
        {searchValue && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            title="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </form>
  )
}

export default SearchBar
