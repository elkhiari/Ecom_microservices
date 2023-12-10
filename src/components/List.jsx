import React from 'react'

function List({data}) {
  return (
    <div className='overflow-auto p-2 m-1 mt-3 bx bg-white text-black max-h-[calc(100vh-200px)]'>

        {data.map((item, index) => (
            <div className='font-normal text-[.8em] p-2  mb-2 border-2 border-[#d4d0c8]]'>
            <span className='text-[#000080]'>Order</span> : {JSON.stringify(item)}
            </div>
        ))}
    </div>
  )
}

export default List