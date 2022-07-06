import { useState, useContext , useEffect } from 'react';
import UserContext from '../contexts/UserContext'
import { Link , useNavigate } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
import { ThreeDots } from  'react-loader-spinner';

import TopBar from "./TopBar";




function InitialPage () {




    return (
        
        <>

            <TopBar />
            <BodyContainer>

                <LineContainer>

                    <LineTitle>CATEGORIA 1</LineTitle>

                    <ProductsContainer>

                        <ProductContainer>

                            <ProductImg>IMG</ProductImg>
                            <ProductName>Camisa Xablau</ProductName>
                            <ProductPrice>R$100,00</ProductPrice>
                            <AddToCartButton>Add to Cart</AddToCartButton>

                        </ProductContainer>

                        <ProductContainer>

                            <ProductImg>IMG</ProductImg>
                            <ProductName>NAME</ProductName>
                            <ProductPrice>PRICE</ProductPrice>
                            <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>

                        </ProductContainer>

                    </ProductsContainer>

                </LineContainer>

                <LineContainer>

                    <LineTitle>CATEGORIA 1</LineTitle>

                    <ProductsContainer>

                        <ProductContainer>

                            <ProductImg>IMG</ProductImg>
                            <ProductName>Camisa Xablau</ProductName>
                            <ProductPrice>R$100,00</ProductPrice>
                            <AddToCartButton>Add to Cart</AddToCartButton>

                        </ProductContainer>

                        <ProductContainer>

                            <ProductImg>IMG</ProductImg>
                            <ProductName>NAME</ProductName>
                            <ProductPrice>PRICE</ProductPrice>
                            <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>

                        </ProductContainer>

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
`;

const LineContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 600px) {
        width: 500px;
    }
`;

const LineTitle = styled.div`
    font-family: 'Righteous';
    font-size: 18px;
`;

const ProductsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 200px;
    height: 300px;

    margin: 0 5px;

    border: 1px solid transparent;
    border-radius: 5px;
   
    :hover {
        cursor: pointer;
        border-color: lightgray;
    }
`;

const ProductImg = styled.div`

`;

const ProductName = styled.div`
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 300;
`;

const ProductPrice = styled.div`
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 700;
`;

const AddToCartButton = styled.div`
    background-color: #6ACEC7;
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 700;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 5px;

    width: 70%;
    height: 40px;
`;