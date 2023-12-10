import React, { useContext } from 'react'
import Header from '../components/Header'
import Container from '../components/Container'
import { dataContext } from '../context/dataContext';

function Stock() {
  const {product} = useContext(dataContext);
  return (
    <div className='w-full bg-[#d4d0c8] shadow-box p-[3px] relative overflow-hidden'>
        <Header title='Stock' />
       <Container>
          {
              product && product.map((item, index) => (
                  <div className='font-normal text-[.7em] p-2  mb-2 border-2 border-[#d4d0c8]]'>
                      {
                          <>
                              <span className='text-green-600 font-bold'>/stock#</span> 
                              { "cat Stock_" + item.id } <br/> {"name: " +item.name } <br /> {" stock => " } <br />  {item.stockDtos
                              .map((item, index) => (
                                <span>
                                    Q : {item.quantity}  warehouse :  {item.warehouseDto.address}  <br />
                                </span> )
                                ) }  
                          </> 
                      }
                  </div>
              ))
          }
       </Container>
    </div>
  )
}

export default Stock