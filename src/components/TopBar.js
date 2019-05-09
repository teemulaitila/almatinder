import React from 'react'
import styled from 'styled-components'
import logo from '../sydan.jpeg'

const TopBarWrapper = styled.div`
  background-color: white;
  height: 40px;
  text-align: center;
`

const SydanLogo = styled.img`
  object-fit: contain;
  height: 40px;
  margin: auto;
  display: inline-block;
`
const TopBar = () => (
  <TopBarWrapper>
    <SydanLogo src={logo}></SydanLogo>

  </TopBarWrapper>
);

export default TopBar