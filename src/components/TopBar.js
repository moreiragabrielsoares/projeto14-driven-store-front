import { useContext } from 'react';
import UserContext from '../contexts/UserContext'
import { Link , useNavigate } from "react-router-dom";
import styled from 'styled-components';





function TopBar () {

    const {user, setUser} = useContext(UserContext);
    
    const navigate = useNavigate();


    function logOut () {
        
        setUser({name: "", token:""})

        navigate("/");
    }


    function verifyLogin () {

        if (user.token === "") {
            
            return  <RightContainer>
                        <UserContainer>
                            <Link to="/login" style={{textDecoration: 'none'}}>
                                <ion-icon name="person-outline"></ion-icon>
                            </Link>
                            
                            <Link to="/login" style={{textDecoration: 'none'}}>
                                <span>Entrar!</span>
                            </Link>
                        </UserContainer>
                        
                        <ShoppingCartContainer>    
                            <ion-icon name="cart-outline"></ion-icon>
                            <div>0</div>
                        </ShoppingCartContainer>
                    </RightContainer>  
            
        } else {

            return  <RightContainer>
                        <UserContainer>  
                            <ion-icon name="person-outline"></ion-icon>
                            <span>{`Olá, ${user.name}!`}</span>
                            <div onClick={() => logOut()}><ion-icon name="exit-outline"></ion-icon></div>
                        </UserContainer>
                        
                        <ShoppingCartContainer>
                            <Link to="/shoppingcart" style={{textDecoration: 'none'}}>
                                <ion-icon name="cart-outline"></ion-icon>
                            </Link>    
    
                          {/* <Link to="/shoppingcart" style={{textDecoration: 'none'}}>
                                <div>{user.qtyCartItems}</div> 
                            </Link> */} 
                        </ShoppingCartContainer>
                    </RightContainer>
            
        }
    }




    return (

        <TopBarContainer>
            
            <LogoContainer>

                <NameContainer>
                    <StoreName>Driven</StoreName>
                    <StoreName>Store</StoreName>
                </NameContainer>

            </LogoContainer>

            {verifyLogin()}

        </TopBarContainer>

    );

}



export default TopBar;


const TopBarContainer = styled.div`
    background-color: #222222;
    height: 60px;
    width:100%;
    display: flex;
    align-items: center;
    padding: 0 25px;
    position: fixed;
    top: 0;
    left: 0;
`;

const LogoContainer = styled.div`
    display: flex;
`;

const NameContainer = styled.div`

`;

const StoreName = styled.div`
    font-family: 'Righteous';
    font-size: 22px;
    color: #FFFFFF;
`;


const RightContainer = styled.div`
    display: flex;
    margin-left: auto;
`;

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;

    ion-icon{
        font-size: 24px;
        color: #FFFFFF;
        margin-right: 5px;
        :hover{
        cursor: pointer;
        }
    }

    span {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 14px;
        color: #FFFFFF;
        margin-right: 10px;
    }
`;

const ShoppingCartContainer = styled.div`
    display: flex;
    align-items: center;

    ion-icon{
        font-size: 28px;
        color: #FFFFFF;
        margin-right: 5px;
    }

    div {
        height: 22px;
        width: 22px;
        padding-top: 1px;
        background-color: #6ACEC7;
        border-radius: 50%;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Roboto';
        font-size: 12px;
        font-weight: 700;
    }
`;