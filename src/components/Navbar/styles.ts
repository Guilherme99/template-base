import styled from 'styled-components';
/* import { shade } from 'polished'; */

export const Styles = styled.div`
    .navbar{
        background-color: #1e663c;
        height: 80px;
        display: flex;
        align-items: center;
        padding-right: 2rem;
        z-index: 9999;
    }
    .navbar > .logo > h2 > a{
        color:#fff;
    }
   
    .menu-bars{
        margin-left: 2rem;
        margin-right: 2.5rem;
        font-size: 2rem;
        background: none;
    }
    .menu-bars2{
            font-size: 2rem;
            background: none;
    }
    .nav-menu{
        background-color: #1e663c;
        width: 300px;
        height: 100vh;
        padding: 0;
        display: flex;
        justify-content: left;
        list-style: none;
        position: fixed;
        top:0;
        left: -100%;
        transition: 850ms;
        z-index: 9999;
    }
    .nav-menu.active{
        left:0;
        transition: 350ms;
    }
    .nav-text{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2% 0px 8px 0px;
        list-style: none;
        height: 60px;

    }
    .nav-text a{
        text-decoration: none;
        color: #f5f5f5;
        font-size: 18px;
        width: 95%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 16px;
        border-radius: 4px;

    }
    .nav-text > a > span{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
    }
    .nav-text > a > span > svg {
        margin-right: 3%;
    }
    .nav-text a:hover{
        background-color: #8be1ad;

    }
    .nav-menu-items{
        width: 100%;

    }
    .navbar-toggle{
        width: 100%;
        height:  80px;
        padding-left:5%;
        display: flex;
        justify-content: start;
        align-items: center;
    }
    .title-table{
        color:#333;
        font-size: 13px;
        font-weight: 600;
    }
    .trash:hover{
        transition: 100ms;
        color:red;
    }
    .edit:hover{
        transition: 100ms;
        color:blue;
    }


    @media (max-width:400px){
        .logo > h2{
            font-size : 18px;
            display: flex;
        }

    }
`;