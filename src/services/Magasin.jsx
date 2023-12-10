import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { dataContext } from '../context/dataContext'
import List from '../components/List'
import Container from '../components/Container'

function Magasin() {
    const [data, setData] = useState()
    const {commande, postCommande} = useContext(dataContext)

    const save = () => {
        try {
            const json = JSON.parse(data)
            if (json) {
                postCommande(json)
            }
        } catch (error) {
            alert('json invalide')
        }
       
    }
    
  return (
    <div className='w-full bg-[#d4d0c8] shadow-box p-[3px] relative overflow-hidden'>
        <Header title='Magasin' />
        {/* <List data={commande} /> */}
        <Container>
            {
                commande && commande.map((item, index) => (
                    <div className='font-normal text-[.7em] p-2  mb-2 border-2 border-[#d4d0c8]]'>
                        {
                            <>
                                <span className='text-green-600 font-bold'>/magasin#</span> { "cat Magasin_" + item.id } <br/> {"status: " +item.status + " | " + "delivery :" + item.deliveryPerson?.fullname }
                            </>
                        }
                    </div>
                ))
            }
        </Container>
    
        <div className='overflow-auto  m-1 mt-3 bx bg-white text-black '>
            <textarea onChange={(e)=>setData(e.target.value)} type="text" className='text-[12px]' placeholder='json here ...'></textarea>
        </div>
        <button onClick={save} className='text-[13px] px-2 py-[2px]'>
            Send
        </button>
    </div>
  )
}

export default Magasin