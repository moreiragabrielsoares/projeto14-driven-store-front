import react from "react";
import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import TopBar from "./TopBar";

export default function CheckOutPage(){
    const { user, setUser } = useContext(UserContext);
    const [balance, setBalance] = useState(0);
    const [adress, setAdress] = useState("");
    const [payment, setPayment] = useState("");
    const [productIds, setProductIds] = useState([])
    const navigate = useNavigate(); 
    /*preciso fazer um get lá nos produtos e pegar o ID dos produtos, o ID do user.
    Quando eu fazer esse get eu preciso fazer um for por no res.data e armazenar o ID de todos os
    produtos na array productsIds. Essa array vai ser enviada pelo orders Made*/
    function ordersMade() { // função que envia o pedido para a API
        const body = {
            //quserId: userID,
            quantity: user.qtyCartItems,
            balance: balance,
            adress: adress,
            payment: payment,
            productIds: productIds,
        }
        const promise = axios.post("https://projeto14-driven-store-back.herokuapp.com/ordersmade", body);
        promise
        .then(res =>{
            console.log("deu bom")
            console.log(res.data);
            alert("Seu pedido foi concluído com sucesso. Obrigado pela preferência!")
            navigate('/');
        })
        .catch(err => {
            console.log(err);
            console.log("deu ruim")
            alert("Não foi possível concluir seu pedido!")
        })

    }
    return (
        <>
            <TopBar />
            <div className="bodyCheckout">
                <h2> Finalize o pedido preenchendo seus dados pessoais</h2>
                <div className="forms">
                    <h3> Método de Pagamento</h3>
                    <input type="text" value={payment} onChange={(e) => setPayment(e.target.value)} placeholder="forma de pagamento" />
                    <h3> Endereço de entrega do produto</h3>
                    <input type="text" value={adress} onChange={(e) => setAdress(e.target.value)} placeholder="Preencha seu ndereço" />
                    <h3> Valor total: R$ {balance}</h3>         
                </div>
                <Link style={{ textDecoration: 'none' }} to={`/checkout`} >
                    <button> Finalizar pedido</button>
                </Link>
            </div>    
        </>
    )
}