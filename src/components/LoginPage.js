import React from "react";
import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from "../contexts/UserContext";
import { useContext } from "react";


export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate(); 
    
    function logar() {
        const body = {
                email: email,
                password: password
            }
            console.log(body)
            navigate('/');
            const promise = axios.post("http://localhost:5000/login", body);
            promise
            .then(res =>{
                console.log("deu bom")
                console.log(res.data);
                navigate('/');
               setUser(
                {   
                    name: res.data.name,
                    token: res.data.token,
                    id: res.data.userId
                }
                
            );
            
            })
            .catch(err => {
                console.log(err);
                console.log("deu ruim")
                alert("Você inseriu dados inválidos. Insira novamente!")
            })
    }

    return (
        <BodyLogin>
            <h2> Driven Store</h2>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
                <button onClick={logar}> Entrar</button> 
               <Link style={{ textDecoration: 'none' }} to={`/signup`} >
                    <h3> Primeira vez? Cadastre-se</h3>
               </Link>
        </BodyLogin>
    )
}

const BodyLogin = styled.div`
    padding-top: 159px;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border: solid;
    padding-bottom: 170px;

h2{
    font-family: 'Saira Stencil One';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
    margin-bottom: 24px;
    }
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
    margin-bottom: 13px;
}
button {
    width: 326px;
    height: 46px;
    background: SteelBlue;
    border-radius: 5px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    margin-left: 18px;
    margin-bottom: 36px;
}
h3{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;  
    display: flex;
    align-items: center;
    justify-content: center;
}
`