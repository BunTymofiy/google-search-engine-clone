import React from 'react'

function SearchHeaderOption({ Icon, title, selected }) {
  return (
    <div className={`flex items-center space-x-1 border-transparent border-b-2 hover:text-blue-500 cursor-pointer hover:border-blue-500 ${selected &&'text-blue-500 border-blue-500'}`}>
        <Icon className={`h-4`} />
        <p className="hidden sm:inline-flex">{title}</p>
    </div>
  )
}

export default SearchHeaderOption