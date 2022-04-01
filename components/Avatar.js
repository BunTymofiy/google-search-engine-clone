import React from 'react'

function Avatar({url , className}) {
  return (
    <img
    className={`rounded-full h-10 cursor-pointer transition duration-150 ease-out transform hover:scale-110 ${className}`}
    loading='lazy'
    src={url}
    alt="profile pic"/>
  )
}

export default Avatar