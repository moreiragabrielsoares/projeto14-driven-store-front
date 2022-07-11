import react from "react";
import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import lixeira from "../assets/lixeira.png";
import TopBar from "./TopBar";
import back from "../assets/back.png"

function RenderShopping({name, price, image, productId, setShopping, user, setQtyCarts}) {
   function deleteChoice() {
       
       const promise = axios.delete(`https://projeto14-driven-store-back.herokuapp.com/shoppingcart/${productId}`)
       promise 
       .then(res => {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            }
            const promise = axios.get("https://projeto14-driven-store-back.herokuapp.com/shoppingcart", config)
            promise
            .then(res =>{
                setShopping(res.data);
                setQtyCarts(res.data.length)
            })
            .catch(err => {
                console.log(err);
            })
       

    })
       .catch(err => {
         console.error('Não foi possível apagar mensagem!');
         console.error(err);
       });
   }

       //Aqui irei deletar um documentar e renderizar novamente a página
    return (
        <Contents> 
            <Items>
                <img src={image} />
                <h3> {name}</h3>
                <h4> {price}</h4>
            </Items>
            <img onClick={deleteChoice} src={lixeira} />
        </Contents>
    )
}


export default function ShoppingCartPage() {
    const { user, setUser, qtyCarts, setQtyCarts } = useContext(UserContext);
    const [shopping, setShopping] = useState([]);
    const [balance, setBalance] = useState(0);

   useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const promise = axios.get("https://projeto14-driven-store-back.herokuapp.com/shoppingcart", config)
        promise
        .then(res =>{
            setShopping(res.data);
            setQtyCarts(res.data.length)
        })
        .catch(err => {
            console.log(err);
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

    return (
        <ShoppingBody>
            <TopBar />
            <Link style={{ textDecoration: 'none' }} to={`/`} >
                <img src={back} />
            </Link>
            
            <Header>
                <h2> Carrinho</h2>
                <h4> Clique em checkout para seguir adiante com a compra</h4>
            </Header>
    
                <Title>
                    <h3> Produto</h3>
                    <h3> Nome</h3>
                    <h3> Valor</h3>
                </Title>
                
                {shopping.map( (data) => <RenderShopping setQtyCarts={setQtyCarts} user={user} setShopping={setShopping} productId={data.productId} name={data.productName} price={data.productPrice} image={data.productImg} />)}

                <TotalPrice>
                    <h3> Total</h3>
                    <h4> {balance}</h4>
                </TotalPrice>
                <Link style={{ textDecoration: 'none' }} to={`/checkout`} >
                    <button> Checkout</button>
               </Link>
                
            
            
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
    img{
        margin-top:40px;
        width: 40px;
        height: 40px;
    }
`
const Header = styled.div`
        display: flex;
        justify-content: center;
        margin-top:40px;
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
    h3:last-child{
        margin-right:60px;
    }
`
const Items = styled.div`
        display: flex;
        width: 90%;
        justify-content:space-between;
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
      
        margin-left:100px;
    }
    img:last-child{
        margin-top:80px;
        width: 40px;
        height: 40px;
        
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
        margin-left:100px;
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
        margin-left:50px;
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