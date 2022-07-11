import styled from "styled-components";
import react from "react";
import { Link,  useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate(); 

    function erro() {
        alert("Você inseriu dados inválidos. ")
    }
    function cadastrar () {
        const body = {
            name,
            email,
            password,
            confirmPassword
        }
        console.log(body)
        console.log("cadastramos")
        const promise = axios.post("https://projeto14-driven-store-back.herokuapp.com/signup", body)
        promise
        .then(res => {
            navigate('/login');
        })
        .catch(res => {
            console.log("deu ruim")
            alert("Você inseriu dados inválidos ou já cadastrados. Insira uma senha de 8 digitos incluindo: letra maiúscula, minúscula, numero e caractere especial!")
        })
    }
    return (
        <BodySignUp>
            <h2>Driven Store</h2>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="nome" />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" />
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirme a senha" />
                {(password === confirmPassword && password.length >=8) && (<button onClick={cadastrar}> Cadastrar</button> )}
                {(password !== confirmPassword || password.length<8) && (<button onClick={erro}> Cadastrar</button> )}
               <Link style={{ textDecoration: 'none' }} to={`/login`} >
                    <h3> Já tem uma conta? Entre agora</h3>
               </Link>
        </BodySignUp>
    )
}

const BodySignUp = styled.div`
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