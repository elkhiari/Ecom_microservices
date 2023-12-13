import React from 'react'
import Header from '../components/Header'
import { useContext } from 'react'
import { dataContext } from '../context/dataContext'
import Container from '../components/Container'

function Catalogue() {
  const {catalogue}  = useContext(dataContext)
  return (
    <div className='w-full bg-[#d4d0c8] shadow-box p-[3px] relative overflow-hidden'>
        <Header title='Catalogue' />
        <Container>
            {
                catalogue && catalogue
                .slice()
                .reverse()
                .map((item, index) => (
                    <div className='font-normal text-[.7em] p-2  mb-2 border-2 border-[#d4d0c8]]'>
                        {
                            <>
                                <span className='text-green-600 font-bold'>/catalogue#</span> { "cat pdt_" + item.idProduct } <br/> {"name: " +item.nomProduct }
                            </>
                        }
                    </div>
                ))
            }
        </Container>
    </div>
  )
}

export default Catalogue