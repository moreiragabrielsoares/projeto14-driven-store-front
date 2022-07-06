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
            <div>InitialPage</div>
        
        </>
        

    );

}





export default InitialPage;