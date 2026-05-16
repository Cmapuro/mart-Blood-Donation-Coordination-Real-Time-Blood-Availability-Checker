import React from 'react'

function formatValue(value, formatter) {
  if (typeof formatter === 'function') {
    return formatter(value)
  }

  if (typeof value === 'number') {
    return value.toLocaleString()
  }

  return String(value)
}

/**
 * AnalyticsBarChart
 * Lightweight responsive bar chart built with plain React + Tailwind classes.
 */
export function AnalyticsBarChart({ title, subtitle, data = [], formatter, colorClass = 'bg-blood-red' }) {
  const maxValue = Math.max(...data.map((item) => item.value), 1)

  return (
    <section className="card h-full">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          {title && <h2 className="text-xl font-bold text-gray-900">{title}</h2>}
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blood-red bg-red-50 px-3 py-2 rounded-full">
          Analytics
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 items-end min-h-[240px]">
        {data.map((item) => {
          const percent = Math.max((item.value / maxValue) * 100, 8)
          return (
            <div key={item.label} className="flex flex-col items-center gap-3">
              <div className="w-full flex justify-center">
                <div className="text-xs font-semibold text-gray-500 bg-gray-50 border border-gray-100 rounded-full px-3 py-1">
                  {formatValue(item.value, formatter)}
                </div>
              </div>
              <div className="relative w-full h-44 flex items-end justify-center rounded-3xl bg-gradient-to-b from-red-50 via-white to-white border border-red-100 overflow-hidden px-2">
                <div
                  className={`w-full max-w-20 rounded-t-2xl ${colorClass} shadow-[0_10px_30px_rgba(225,29,72,0.22)] transition-all duration-500`}
                  style={{ height: `${percent}%`, minHeight: '18px' }}
                  aria-label={`${item.label}: ${item.value}`}
                />
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-800 text-sm">{item.label}</p>
                {item.note && <p className="text-xs text-gray-500 mt-1">{item.note}</p>}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default AnalyticsBarChart
