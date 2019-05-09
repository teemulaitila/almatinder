import React from 'react'
import styled from 'styled-components'

const ButtonsWrapper = styled.div`
    display: flex;
    height: 80px;
    justify-content: center;
    align-items: center;
`


const Buttons = ({ onAccept, onDecline }) => {


    return (

        <ButtonsWrapper>
            <button type="button" className="btn btn-default btn-sm" onClick={onAccept()}>
                <span className="glyphicon glyphicon-heart"></span>
                Left
            </button>
            <button onClick={onDecline()}>
                Right
            </button>
        </ButtonsWrapper>
    );

}


export default Buttons