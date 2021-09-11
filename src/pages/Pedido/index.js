import React from 'react'
import { StyledForm, StyledFormWrapper, StyledInput } from './PedidoElementos'

const Pedido = () => {
    return (
        <>
            <StyledFormWrapper>
                <StyledForm>
                    <h2>Contact Form</h2>
                    <label htmlFor="name"></label>
                    <StyledInput type="text" name="name" />
                    <label htmlFor="email"></label>
                    <StyledInput type="email" name="email" />
                </StyledForm>
            </StyledFormWrapper>
        </>
    )
}

export default Pedido
