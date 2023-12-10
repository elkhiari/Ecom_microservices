import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const dataContext = createContext();

const DataProvider = ({ children }) => {
    const [commande, setCommande] = useState([]);
    const [livraison, setLivraison] = useState([]);
    const [facturation,setFacturation] = useState([]);
    const [product,setProduct] = useState([]);

    const getLivraison = () => {
        axios.get(process.env.REACT_APP_LVM + "/api/v1/orders").then((res) => {
                setLivraison(res.data);
        }).catch((err) => console.log(err))
    }
    const getFac = () => {
        axios.get("http://38.242.131.85:8061/api/invoices/").then((res) => {
                setFacturation(res.data);
        }).catch((err) => console.log(err))
    }

    const getCommande = () => {
        axios.get(process.env.REACT_APP_CMD + "/All").then((res) => {
                setCommande(res.data);
        }).catch((err) => console.log(err))
}

    const postCommande = (data) => {
        axios.post(process.env.REACT_APP_CMD + "/place-order", data).then((res) => {
            getCommande();
        }).catch((err) => console.log(err))
    }

    const changeStatus = async(did,cid)=> {
        await axios.put(process.env.REACT_APP_LVM + "/api/v1/orders/"+did+"/"+cid)
            .then((res) => {
                getLivraison();
            }).catch((err) => console.log(err))
    }

    const getProducts = async()=> {
        await axios.get("http://38.242.131.85:8058/api/v1/products/")
            .then((res) => {
                setProduct(res.data);
            }).catch((err) => console.log(err))
    }

    useEffect(() => {
        getCommande();
        getLivraison();
        getFac();
        getProducts();
    }, []);

    return (
    <dataContext.Provider value={{commande,product, postCommande,getFac,facturation, getCommande, livraison, changeStatus}}>
        {children}
    </dataContext.Provider>)
}


export {DataProvider, dataContext};
