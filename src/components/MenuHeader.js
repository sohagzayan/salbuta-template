import React from 'react';
import { AiOutlineCaretDown } from "react-icons/ai";
import { BiChevronsRight } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { HiArrowSmDown } from "react-icons/hi";
import styled from 'styled-components';
import logo from '../assets/photos/logo_1x.png';


const MenuHeader = () => {
    return (
        <MenuHeaderContainer>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <MenuList>
                    <li><a className='activeBorder' href="/">Home</a></li>
                    <li><a href="/">Post & Pages <HiArrowSmDown /></a></li>
                    <li><a href="/">Big Drop<AiOutlineCaretDown /> </a></li>
                    <li><a href="/">One Mega<BiChevronsRight /> </a></li>
                    <li><a href="/">Multi Mega<BiChevronsRight /></a></li>
                    <li><a href="/">Error 404</a></li>
                    <li><FiSearch className='searchIcons' /></li>
                </MenuList>
            </div>
        </MenuHeaderContainer>
    );
};


const MenuHeaderContainer = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const MenuList = styled.ul`
    display: flex;
    align-items: center;
   .searchIcons{
       font-size: 22px;
       color: white;
       cursor: pointer;
   }
    li{
        margin: 0 5px;
        a{
            text-decoration: none;
            color: white;
            margin: 0 15px;
            padding: 10px 0;
            display: flex;
            align-items: center;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                width: 0;
                height: 2px;
                background-color: white;
                bottom: 0;
                left: 0;
                transition: all .3s ease;
            } 
        }
        a.activeBorder::before{
                width: 100%;
        }
       
        &:hover a::before{
            width: 100%;
        }

 
    }
`

export default MenuHeader;