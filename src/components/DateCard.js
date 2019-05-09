import React from 'react'
import styled from 'styled-components'
import logo from '../sydan.jpeg'

const DateCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => (props.cardStatus === 'LEFT' ? 'magenta' : 
    height: 100%;
    transition: transform 0.6s;
    ${props => (props.cardStatus === 'LEFT' ? "transForm: translate(400px) rotate (40deg)" : "")}
    ${props => (props.cardStatus === 'RIGHT' ? "transForm: translate(-400px) rotate (-40deg)" : "")}
`

const ImageWrapper = styled.img`
    display: flex;
    height: 80%;


`
const InfoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    line-height: 100%
`

const DateCard = (props) => {

    return (
        <DateCardWrapper cardStatus={props.cardStatus}>
            <ImageWrapper src={logo} />
            <InfoWrapper>
                Nimi ja ikä
            </InfoWrapper>
        </DateCardWrapper>
    )
}

export default DateCard