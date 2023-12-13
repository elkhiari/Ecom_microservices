import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { dataContext } from '../context/dataContext'
import List from '../components/List'
import axios from 'axios'
import Container from '../components/Container'

function Livraison() {
    const {livraison,changeStatus,getCommande,getLivraison } = useContext(dataContext)
    const [deliveryPerson, setDeliveryPerson] = useState()
    const [sta,setSta] = useState({
        did: 0,
        cid: 0
    })

    const changestt = () => {
        axios.post(process.env.REACT_APP_LVM + "/api/v1/orders/status/"+sta.cid).then((res) => {
            setTimeout(()=>{
                getCommande()
                getLivraison()
            },1000)
        }).catch((err) => console.log(err))
    }

    const changeS = () => {
        if (sta.did != 0 && sta.cid != 0) {
            changeStatus(sta.did, sta.cid).then((res) => {
                console.log(res);
            }).catch((err) => console.log(err))
        }
        console.log(sta);
    }

    useEffect(() => {
        axios.get(process.env.REACT_APP_LVM + "/api/v1/delivery-persons").then((res) => {
            setDeliveryPerson(res.data);
        }
        ).catch((err) => console.log(err))
    }
    , []);
  return (
    <div className='w-full bg-[#d4d0c8] shadow-box p-[3px] relative overflow-hidden'>
        <Header title='Livraison' />
        <Container>
            {
                livraison && livraison
                .slice()
                .reverse()
                .map((item, index) => (
                    <div className='font-normal text-[.7em] p-2  mb-2 border-2 border-[#d4d0c8]]'>
                        {
                            <>
                                <span className='text-green-600 font-bold'>/livraison#</span> { "cat Livraison_" + item.id } <br/> {"status: " +item.status + " | " + "delivery :" + item.deliveryPerson?.fullname }
                            </>
                        }
                    </div>
                ))
            }
        </Container>
        <div className=' justify-between items-center px-2'>
            <div className='flex'>

            <div>
                <label htmlFor="se">Delivery Person</label>
                <select className='px-2' onChange={(e)=>setSta({...sta, did: e.target.value})}>
                {
                    deliveryPerson && deliveryPerson.map((item, index) => (
                        <option key={index} value={item.id}>
                            {item.fullname}
                        </option>
                    ))
                }
                </select>
            </div>

            <div>
                <label htmlFor="kh">Commande</label>
                <select className='px-2' onChange={(e)=>setSta({...sta, cid: e.target.value})}>
                {
                    livraison && livraison.map((item, index) => (
                        <option key={index} value={item.id}>
                            {item.id}
                        </option>
                    ))
                }
                </select>
            </div>
            </div>
            <div className='flex'>
            <button onClick={changeS} className='px-2'>
                save
            </button>
            <button onClick={changestt} className='px-2'>
                change status
            </button>
            </div>
            
        </div>
    </div>
  )
}

export default Livraison