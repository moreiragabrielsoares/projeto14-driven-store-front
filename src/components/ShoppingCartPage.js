import react from "react";
import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import camisa from "../assets/camisa.jpeg";

export default function ShoppingCartPage() {
    //para fazer esse get só preciso do token do usuário pra ver se ele está logado
    //Preciso importar o topo da página;

    const { user, setUser } = useContext(UserContext);
    const [products, setProducts] = useState([]);
   /* useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const promise = axios.get("https://projeto14-driven-store-back.herokuapp.com/cashFlux", config)
        promise
        .then(res =>{
            console.log(res.data);
            setProducts(res.data)
            console.log(products)
        })
        .catch(err => {
            console.log(err);
            console.log("deu ruim")
        })
    }, []) */

    return (
        <ShoppingBody>
            <Header>
                <h2> Carrinho</h2>
                <h4> Clique em checkout para seguir adiante com a compra</h4>
            </Header>
    
                <Title>
                    <h3> Produto</h3>
                    <h3> Nome</h3>
                    <h3> Valor</h3>
                </Title>
                <Contents> 
                    <img src={camisa} />
                    <h3> Camisa Unidos da Tijuca</h3>
                    <h4> 60 reais</h4>
                </Contents>
                <Contents>
                    <img src={camisa} />
                    <h3> Camisa Unidos da Tijuca</h3>
                    <h4> 60 reais</h4>
                </Contents>
                <Contents>
                    <img src={camisa} />
                    <h3> Camisa </h3>
                    <h4> 60 reais</h4>
                </Contents>
                <TotalPrice>
                    <h3> Total</h3>
                    <h4> 180 Reais</h4>
                </TotalPrice>
                <button> Checkout</button>
            
            
        </ShoppingBody>
    )

}

const ShoppingBody = styled.div`
        background-color: white;
        margin: 40px;
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
const Header = styled.div`
        display: flex;
        justify-content: center;
    h2 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 44px;
        line-height: 55px;
        letter-spacing: -0.012em;
        color: Black; 
    }
    h4 {
        margin-top: 5px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: gray;    
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
    }
`
const Title = styled.div`
        margin-top: 30px;
        display: flex;
        background-color: gray;
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 55px;
        letter-spacing: -0.012em;
        color: white; 
        justify-content: space-around;
`
const Contents = styled.div`
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
        border: solid;
        border-width: 1px;
        border-color: gray;
    img {
        width: 200px;
        height: 200px;
    }
    h3{
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 21px;
        color: gray;    
        display: flex;
        width: 200px;
    }
    h4 {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 21px;
        color: gray;    
        display: flex;
        width: 200px;
    }
`
const TotalPrice = styled.div`
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        margin-left: 70px;
        padding-left: 70px;
        width: 90%;
    h3 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 21px;
        color: Black;    
        display: flex;
        width: 200px;
    }
    h4{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 21px;
        color: gray;   
        width: 200px;
    }
`