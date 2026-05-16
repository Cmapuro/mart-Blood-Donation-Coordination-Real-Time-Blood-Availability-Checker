import React, { useState } from 'react'

/**
 * TableComponent
 * Reusable table component with pagination, sorting, and search
 * Features: headers, rows, pagination, search, actions
 */
export function TableComponent({
  columns = [],
  data = [],
  onRowClick,
  actions = [],
  searchable = false,
  paginated = true,
  itemsPerPage = 10,
}) {
  // State for current page
  const [currentPage, setCurrentPage] = useState(1)

  // State for search query
  const [searchQuery, setSearchQuery] = useState('')

  // State for sort column
  const [sortColumn, setSortColumn] = useState(null)

  // State for sort direction
  const [sortDirection, setSortDirection] = useState('asc')

  // Filter data based on search query
  const filteredData = searchable
    ? data.filter((row) =>
        columns.some((col) =>
          String(row[col.key])
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      )
    : data

  // Sort data
  const sortedData = sortColumn
    ? [...filteredData].sort((a, b) => {
        const aValue = a[sortColumn]
        const bValue = b[sortColumn]

        if (sortDirection === 'asc') {
          return aValue > bValue ? 1 : -1
        } else {
          return aValue < bValue ? 1 : -1
        }
      })
    : filteredData

  // Paginate data
  const totalPages = Math.ceil(sortedData.length / itemsPerPage)
  const paginatedData = paginated
    ? sortedData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    : sortedData

  // Handle sort
  const handleSort = (columnKey) => {
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(columnKey)
      setSortDirection('asc')
    }
  }

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      {searchable && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setCurrentPage(1)
            }}
            className="form-control w-full"
          />
        </div>
      )}

      {/* Table */}
      <div className="table-container">
        <table className="table">
          {/* Header */}
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  onClick={() => col.sortable && handleSort(col.key)}
                  className={col.sortable ? 'cursor-pointer hover:bg-blood-dark' : ''}
                >
                  <div className="flex items-center justify-between">
                    {col.label}
                    {col.sortable && sortColumn === col.key && (
                      <span>{sortDirection === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
              ))}
              {actions.length > 0 && <th>Actions</th>}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, idx) => (
                <tr
                  key={idx}
                  onClick={() => onRowClick?.(row)}
                  className="cursor-pointer"
                >
                  {columns.map((col) => (
                    <td key={col.key}>
                      {col.render
                        ? col.render(row[col.key], row)
                        : row[col.key]}
                    </td>
                  ))}
                  {actions.length > 0 && (
                    <td>
                      <div className="flex gap-2">
                        {actions.map((action) => (
                          <button
                            key={action.label}
                            onClick={(e) => {
                              e.stopPropagation()
                              action.onClick(row)
                            }}
                            className={`text-xs px-2 py-1 rounded transition ${
                              action.variant === 'danger'
                                ? 'bg-red-100 text-red-600 hover:bg-red-200'
                                : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                            }`}
                          >
                            {action.label}
                          </button>
                        ))}
                      </div>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length + (actions.length > 0 ? 1 : 0)}>
                  <div className="text-center py-8 text-gray-500">
                    No data available
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {paginated && totalPages > 1 && (
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="btn-secondary disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="btn-secondary disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default TableComponent
