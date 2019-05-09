import React from 'react'
import styled from 'styled-components'

const LoadingWrapper = styled.div`
    display: flex;
    background-color: red;
    height: 100%
`

const Loading = () => {
    return (
        <LoadingWrapper />
    )
}

export default Loading