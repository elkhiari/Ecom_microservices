import React from 'react'

function Container({children}) {
  return (
    <div className='overflow-auto  p-2 m-1 mt-3 bx bg-white text-black max-h-[calc(100vh-200px)]'>
        {children}
    </div>
  )
}

export default Container