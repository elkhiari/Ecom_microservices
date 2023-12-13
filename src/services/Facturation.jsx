import React, { useContext } from 'react'
import Header from '../components/Header'
import { dataContext } from '../context/dataContext'
import List from '../components/List';
import Container from '../components/Container';

function Facturation() {
    const {facturation} = useContext(dataContext);
  return (
    <div className='w-full bg-[#d4d0c8] shadow-box p-[3px] relative overflow-hidden'>
        <Header title='Facturation' />
        <Container>
            {
                facturation && facturation
                .slice()
                .reverse()
                .map((item, index) => (
                    <div className='font-normal text-[.7em] p-2  mb-2 border-2 border-[#d4d0c8]]'>
                        {
                            <>
                                <span className='text-green-600 font-bold'>/facturation#</span> { "cat Facturation_" + item.invoiceId } <br/> {"total: " +item.totalPay}
                            </>
                        }
                    </div>
                ))
            }
        </Container>
    </div>
  )
}

export default Facturation