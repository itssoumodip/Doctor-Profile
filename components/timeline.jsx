"use client"

/**
 * @typedef {Object} TimelineItem
 * @property {string} year - Year of the achievement/education
 * @property {string} title - Title of the position/degree
 * @property {string} institution - Name of the institution
 * @property {string} [description] - Optional description of the item
 */

/**
 * Timeline component to display education and professional experience
 * @param {Object} props
 * @param {TimelineItem[]} props.items - Array of timeline items to display
 * @param {string} [props.title] - Section title
 */
export function Timeline({ items, title }) {
  return (
    <div className="space-y-6">
      {title && <h2 className="text-2xl font-bold text-blue-900">{title}</h2>}
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-blue-200">
            <div className="absolute left-[-8px] top-0 w-4 h-4 bg-blue-900 rounded-full"></div>
            <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
            <div className="text-gray-600 mt-2 mb-1">{item.institution}</div>
            {item.description && (
              <p className="text-gray-600 text-sm">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

