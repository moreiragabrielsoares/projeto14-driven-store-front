import { useState , useEffect , useContext} from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

import UserContext from '../contexts/UserContext'
import TopBar from "./TopBar";


function InitialPage () {

    const {user, setUser} = useContext(UserContext);

    const navigate = useNavigate();

    function logIn () {
        navigate("/login");
    }

    const [productsList, setProductsList] = useState([]);

    useEffect(() => {

		const promisse = axios.get("http://localhost:5000/products");

		promisse.then(success);

        function success (res) {
            setProductsList(res.data);
        }
        
        promisse.catch((erro) => {alert(erro.response.data.message)});

	}, []);


    function addToCart(product) {

        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }

        const productCart = {
            userId: "62c72184afe5b9e0e6ae9e6b",
            productId: product._id,
            productName: product.name,
            productPrice: product.price,
            productImg: product.img
        };

        const request = axios.post("http://localhost:5000/shoppingcart", productCart, config);

        request.then(registerSuccess);         
        
        request.catch((erro) => alert(erro.response.data));

    }

    function registerSuccess (res) {
        
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }

		const promisse = axios.get("http://localhost:5000/shoppingcart", config);

		promisse.then(success);

        function success (res) {
            setUser({qtyCartItems: res.data.length});
        }
        
        promisse.catch((erro) => {alert(erro.response.data.message)});
    }


    function verifyCaderno (product) {

        if (product.category === "caderno") {

            return  <ProductContainer>

                        <ProductImg>
                            <img src={product.img}/>
                        </ProductImg>
                        <ProductName>{product.name}</ProductName>
                        <ProductPrice>{`R$${product.price.toFixed(2).toString().replace(".", ",")}`}</ProductPrice>
                        <AddToCartButton onClick={user.token === "" ? (() => logIn()) : (() => addToCart(product))}>Adicionar ao Carrinho</AddToCartButton>

                    </ProductContainer>
        }
    }


    function verifyCaneca (product) {

        if (product.category === "caneca") {

            return  <ProductContainer>

                        <ProductImg>
                            <img src={product.img}/>
                        </ProductImg>
                        <ProductName>{product.name}</ProductName>
                        <ProductPrice>{`R$${product.price.toFixed(2).toString().replace(".", ",")}`}</ProductPrice>
                        <AddToCartButton onClick={user.token === "" ? (() => logIn()) : (() => addToCart(product))}>Adicionar ao Carrinho</AddToCartButton>

                    </ProductContainer>
        }
    }

    function verifyMochila (product) {

        if (product.category === "mochila") {

            return  <ProductContainer>

                        <ProductImg>
                            <img src={product.img}/>
                        </ProductImg>
                        <ProductName>{product.name}</ProductName>
                        <ProductPrice>{`R$${product.price.toFixed(2).toString().replace(".", ",")}`}</ProductPrice>
                        <AddToCartButton onClick={user.token === "" ? (() => logIn()) : (() => addToCart(product))}>Adicionar ao Carrinho</AddToCartButton>

                    </ProductContainer>
        }
    }


    return (
        
        <>
            <TopBar />

            <BodyContainer>

                <LineContainer>

                    <LineTitle>CADERNOS</LineTitle>

                    <ProductsContainer>

                        {productsList.map((product) => verifyCaderno(product))}

                    </ProductsContainer>

                </LineContainer>

                <LineContainer>

                    <LineTitle>CANECAS</LineTitle>

                    <ProductsContainer>

                        {productsList.map((product) => verifyCaneca(product))}

                    </ProductsContainer>

                </LineContainer>

                <LineContainer>

                    <LineTitle>MOCHILAS</LineTitle>

                    <ProductsContainer>

                        {productsList.map((product) => verifyMochila(product))}

                    </ProductsContainer>

                </LineContainer>

            </BodyContainer>
        
        </>
        
    );

}


export default InitialPage;


const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    padding: 0 15px;
`;

const LineContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
`;

const LineTitle = styled.div`
    font-family: 'Righteous';
    font-size: 18px;
    margin-bottom: 15px;
`;

const ProductsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    overflow-x: auto;
`;

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0 5px;

    border: 1px solid transparent;
    border-radius: 5px;
   
    :hover {
        border-color: lightgray;
    }

    min-width:180px;
    width: 180px;
    height: 300px;

    @media (max-width: 600px) {
        min-width: 180px;
    }
`;

const ProductImg = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 90%;
    }
`;

const ProductName = styled.div`
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 10px;
`;

const ProductPrice = styled.div`
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
`;

const AddToCartButton = styled.div`
    background-color: #6ACEC7;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 700;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 5px;

    width: 70%;
    height: 40px;

    :hover {
        cursor: pointer;
    }
`;