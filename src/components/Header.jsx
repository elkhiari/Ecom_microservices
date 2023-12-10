import React from 'react'
import { AiOutlineClose } from "react-icons/ai";


function Header({title}) {
  return (
    <header className='w-full text-[13px] flex justify-between win7hewader font-bold p-[3px] text-white relative'>
        <h1>{title}</h1>
        <button >
            <AiOutlineClose className=' text-[13px]' />
        </button>
    </header>
  )
}

export default Header