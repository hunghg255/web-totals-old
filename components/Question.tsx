import React from 'react'

function Question({ render, children }) {
  return (
    <div className="flex items-center">
      {/* markdown */}
      <div className="w-[100%] mr-4">{children}</div>
      {/* answers */}
      <div className="flex flex-col 2 justify-between w-full">{render}</div>
    </div>
  )
}

export default Question
