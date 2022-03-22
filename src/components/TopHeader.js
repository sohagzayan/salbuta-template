import React from "react";
import { AiOutlineGooglePlus, AiOutlineTwitter } from "react-icons/ai";
import { BsDribbble } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { RiBehanceFill } from "react-icons/ri";
import styled from "styled-components";

const TopHeader = () => {
  return (
    <TopHeaderContainer>
      <SideGadgets>
        <a href="/">
          <CgMenuGridO className="icons_menu_grid" />
          <span>SIDE GADGETS</span>
        </a>
      </SideGadgets>
      <SocialIcons>
        <a href="/"><AiOutlineTwitter /> </a>
        <a href="/"> <FaFacebookF /></a>
        <a href="/"><AiOutlineGooglePlus /></a>
        <a href="/"><FiInstagram /></a>
        <a href="/"> <RiBehanceFill /></a>
        <a href="/"><BsDribbble /></a>
      </SocialIcons>
    </TopHeaderContainer>
  );
};

const TopHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SideGadgets = styled.div`
  background-color: white;
  padding: 8px 20px;
  border-radius: 18px;
  cursor: pointer;

  @media (max-width: 775px) {
    background-color: transparent;
    a {
      color: white !important;
      span {
        display: none;
      }
      .icons_menu_grid{
          margin : 0 !important;
      }
    }
  }

  a {
    color: black;
    display: flex;
    align-items: center;
    font-size: 15px;
    letter-spacing: 1px;
    font-weight: 300;
    text-decoration: none;
    .icons_menu_grid {
      margin-right: 10px;
      font-size: 22px;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  a {
      background-color: transparent;
      width: 35px;
      height: 35px;
      display: block;
      border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin: 0 5px;
    color: white;
  }
  & a:nth-child(1) {
      background-color: #1da1f2;
    }
    & a:nth-child(2) {
        background-color: #0056b3;
  }
  & a:nth-child(3) {
    background-color: #dd4b39;
  }
  & a:nth-child(4) {
    background-color: #f77737;
  }
  & a:nth-child(5) {
    background-color: #1769ff;
  }
  & a:nth-child(6) {
    background-color: #ea4c89;
}
@media (max-width: 775px){
    a{
        background-color: transparent !important;
        margin: 1px ;
    }
}
`;

export default TopHeader;
