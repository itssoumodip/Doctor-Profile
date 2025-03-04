interface TimelineItem {
  year: string
  title: string
  institution: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={index} className="relative pl-8 pb-8 border-l border-blue-200 last:border-0 last:pb-0">
          <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="inline-block px-2 py-1 rounded bg-blue-100 text-blue-800 text-xs font-medium mb-2">
              {item.year}
            </span>
            <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
            <p className="text-blue-700 font-medium">{item.institution}</p>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

