import react from "react";
import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import TopBar from "./TopBar";
import back from "../assets/back.png"
export default function CheckOutPage(){
    const { user, setUser } = useContext(UserContext);
    const [balance, setBalance] = useState(0);
    const [adress, setAdress] = useState("");
    const [payment, setPayment] = useState("");
    const productIds = []
    const [qtyCartItems, setQtyCartItems] = useState(0);
    const [shopping, setShopping] = useState([])
    const navigate = useNavigate(); 
    /*
    Quando eu fazer esse get eu preciso fazer um for por no res.data e armazenar o ID de todos os
    produtos na array productsIds. Essa array vai ser enviada pelo orders Made*/
    
    function ordersMade() { // função que envia o pedido para a API
        const body = {
            qtyCartItems: qtyCartItems,
            balance: balance,
            adress: adress,
            payment: payment,
            productIds: productIds,
            email: user.email
        }
        console.log(body)
        const promise = axios.post("http://localhost:5000/ordersmade", body);
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

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const promise = axios.get("http://localhost:5000/shoppingcart", config)
        promise
        .then(res =>{
            setShopping(res.data);
            setQtyCartItems(res.data.length);
        })
        .catch(err => {
            console.log(err);
            console.log("deu ruim")
        })
    }, [])

    let total = 0;
    useEffect(() => {
        for(let i = 0; i < shopping.length; i++) {

            let valor = shopping[i].productPrice
                total += valor
        }
        setBalance(total) 
    })
    useEffect(() => {
        for(let i = 0; i < shopping.length; i++) {

            let id = shopping[i].productId
                productIds.push(id)
        }
        
    })
    console.log(balance)

    return (
        <>
            <TopBar />
            <Link style={{ textDecoration: 'none' }} to={`/shoppingcart`} >
              <Image> <img src={back} /> </Image>  
            </Link>
            <BodyCheckout>
                <h2> Finalize o pedido preenchendo seus dados pessoais</h2>
                <Forms>
                    <h3> Método de Pagamento</h3>
                    <input type="text" value={payment} onChange={(e) => setPayment(e.target.value)} placeholder="forma de pagamento" />
                    <h3> Endereço de entrega do produto</h3>
                    <input type="text" value={adress} onChange={(e) => setAdress(e.target.value)} placeholder="Preencha seu ndereço" />
                    <h3> Valor total: R$ {balance}</h3>         
                </Forms>
                <Link style={{ textDecoration: 'none' }} to={`/checkout`} >
                    <button onClick={ordersMade}> Finalizar pedido</button>
                </Link>
            </BodyCheckout>    
        </>
    )
}

const Image = styled.div`
        img{
            margin-top:60px;
            width: 40px;
            height: 40px;
        }
        
`
const BodyCheckout = styled.div`
        margin-top:30px;
    
    h2{
        display: flex;
        justify-content: center;
        background-color: gray;
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 55px;
        letter-spacing: -0.012em;
        color: white; 
        justify-content: space-around;
    }
    button {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        width: 200px;
        height: 61px;
        left: 25px;
        bottom: 16px;
        background: SteelBlue;
        border-radius: 50px;
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 55px;
        letter-spacing: -0.012em;
        color: white; 
    }
`
const Forms = styled.div`
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    input {
        width: 326px;
        height: 58px;
        background: #FFFFFF;
        border-radius: 5px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: black;
        margin-left: 18px;
        margin-bottom: 50px;
    h3 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 21px;
        margin-bottom: 12px;
    }
    }
`