import { useState, useContext , useEffect } from 'react';
import UserContext from '../contexts/UserContext'
import { Link , useNavigate } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
import { ThreeDots } from  'react-loader-spinner';

import TopBar from "./TopBar";




function InitialPage () {

    const navigate = useNavigate();


    function logIn () {
        navigate("/login");
    }



    return (
        
        <>

            <TopBar />
            <BodyContainer>

                <LineContainer>

                    <LineTitle>CADERNOS</LineTitle>

                    <ProductsContainer>

                        <ProductContainer>

                            <ProductImg>
                                <img src="https://images.tcdn.com.br/img/img_prod/997151/caderno_universitario_capa_dura_naruto_1_materia_sd_4925_1_0976068f9c099ff2ada73892b3e07c39.jpg"/>
                            </ProductImg>
                            <ProductName>Caderno Narutin</ProductName>
                            <ProductPrice>R$100,00</ProductPrice>
                            <AddToCartButton onClick={() => logIn()}>Adicionar ao Carrinho</AddToCartButton>

                        </ProductContainer>

                        <ProductContainer>

                            <ProductImg>
                                <img src="https://images-americanas.b2w.io/produtos/4326277747/imagens/caderno-homem-aranha-1-materia-universitario-espiral-80-fls-tilibra/4326277747_1_large.jpg"/>
                            </ProductImg>
                            <ProductName>NAME</ProductName>
                            <ProductPrice>PRICE</ProductPrice>
                            <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>

                        </ProductContainer>

                        <ProductContainer>

                            <ProductImg>
                                <img src="https://static.ocaderninho.com.br/produto/multifotos/hd/20210211171654_1769998231_DZ.jpg"/>
                            </ProductImg>
                            <ProductName>NAME</ProductName>
                            <ProductPrice>PRICE</ProductPrice>
                            <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>

                        </ProductContainer>

                        <ProductContainer>

                            <ProductImg>
                                <img src="https://images.tcdn.com.br/img/img_prod/997151/caderno_universitario_capa_dura_naruto_1_materia_sd_4925_1_0976068f9c099ff2ada73892b3e07c39.jpg"/>
                            </ProductImg>
                            <ProductName>Caderno Narutin</ProductName>
                            <ProductPrice>R$100,00</ProductPrice>
                            <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>

                        </ProductContainer>


                    </ProductsContainer>

                </LineContainer>

                <LineContainer>

                    <LineTitle>CANECAS</LineTitle>

                    <ProductsContainer>

                        <ProductContainer>

                            <ProductImg>
                                <img src="https://images.tcdn.com.br/img/img_prod/997151/caderno_universitario_capa_dura_naruto_1_materia_sd_4925_1_0976068f9c099ff2ada73892b3e07c39.jpg"/>
                            </ProductImg>
                            <ProductName>Caderno Narutin</ProductName>
                            <ProductPrice>R$100,00</ProductPrice>
                            <AddToCartButton onClick={() => logIn()}>Adicionar ao Carrinho</AddToCartButton>

                        </ProductContainer>

                        <ProductContainer>

                            <ProductImg>
                                <img src="https://static.ocaderninho.com.br/produto/multifotos/hd/20210211171654_1769998231_DZ.jpg"/>
                            </ProductImg>
                            <ProductName>NAME</ProductName>
                            <ProductPrice>PRICE</ProductPrice>
                            <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>

                        </ProductContainer>

                        <ProductContainer>

                            <ProductImg>
                                <img src="https://static.ocaderninho.com.br/produto/multifotos/hd/20210211171654_1769998231_DZ.jpg"/>
                            </ProductImg>
                            <ProductName>NAME</ProductName>
                            <ProductPrice>PRICE</ProductPrice>
                            <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>

                        </ProductContainer>

                        <ProductContainer>

                            <ProductImg>
                                <img src="https://images.tcdn.com.br/img/img_prod/997151/caderno_universitario_capa_dura_naruto_1_materia_sd_4925_1_0976068f9c099ff2ada73892b3e07c39.jpg"/>
                            </ProductImg>
                            <ProductName>Caderno Narutin</ProductName>
                            <ProductPrice>R$100,00</ProductPrice>
                            <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>

                        </ProductContainer>

                    </ProductsContainer>

                </LineContainer>

                <LineContainer>

                    <LineTitle>CADERNOS</LineTitle>

                    <ProductsContainer>

                        <ProductContainer>

                            <ProductImg>
                                <img src="https://images.tcdn.com.br/img/img_prod/997151/caderno_universitario_capa_dura_naruto_1_materia_sd_4925_1_0976068f9c099ff2ada73892b3e07c39.jpg"/>
                            </ProductImg>
                            <ProductName>Caderno Narutin</ProductName>
                            <ProductPrice>R$100,00</ProductPrice>
                            <AddToCartButton onClick={() => logIn()}>Adicionar ao Carrinho</AddToCartButton>

                        </ProductContainer>

                        <ProductContainer>

                            <ProductImg>
                                <img src="https://static.ocaderninho.com.br/produto/multifotos/hd/20210211171654_1769998231_DZ.jpg"/>
                            </ProductImg>
                            <ProductName>NAME</ProductName>
                            <ProductPrice>PRICE</ProductPrice>
                            <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>

                        </ProductContainer>

                        <ProductContainer>

                            <ProductImg>
                                <img src="https://static.ocaderninho.com.br/produto/multifotos/hd/20210211171654_1769998231_DZ.jpg"/>
                            </ProductImg>
                            <ProductName>NAME</ProductName>
                            <ProductPrice>PRICE</ProductPrice>
                            <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>

                        </ProductContainer>

                        <ProductContainer>

                            <ProductImg>
                                <img src="https://images.tcdn.com.br/img/img_prod/997151/caderno_universitario_capa_dura_naruto_1_materia_sd_4925_1_0976068f9c099ff2ada73892b3e07c39.jpg"/>
                            </ProductImg>
                            <ProductName>Caderno Narutin</ProductName>
                            <ProductPrice>R$100,00</ProductPrice>
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
        cursor: pointer;
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
`;