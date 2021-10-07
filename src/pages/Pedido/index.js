import React, { useState, useEffect } from 'react'
import {
    PedidoImg,
    StyledButton,
    StyledFieldset,
    StyledForm,
    Container,
    StyledFormWrapper,
    StyledInput,
    StyledTextArea
} from './PedidoElementos'
import axios from 'axios';

const Pedido = () => {
    const [quantidade, setQuantidade] = useState(0);
    const [produto, setProduto] = useState({});
    const produtoId = localStorage.getItem('produto_id');
    const [form, setForm] = useState(
        {

            id: produtoId,
            quantidade: quantidade,
            observacoes: '',

        }
    );

    console.log('local storage ', produtoId);


    useEffect(() => {
        axios
            .get(`http://localhost:3001/produto/${produtoId}`)
            .then((response) => {
                setProduto(response.data);
                console.log('fetch result', response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [produtoId])

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.removeItem("produto_id");
        console.log(form);
    }
    const handleInput = (e) => {
        e.preventDefault();
        const inputName = e.currentTarget.name;
        const value = e.currentTarget.value

        setForm(prev => ({ ...prev, [inputName]: value }));

        console.log(form);
    }

    return (
        <>
            <Container>
                <StyledFormWrapper>
                    <StyledForm onSubmit={handleSubmit}>
                        <PedidoImg src={produto.img} />
                        <h2>{produto.nome}</h2>
                        <StyledInput
                            type="number"
                            name="quantidade"
                            value={form.quantidade}
                            onChange={handleInput}
                        />
                        <label htmlFor="observacoes">Observações:</label>
                        <StyledTextArea
                            name="observacoes"
                            value={form.observacoes}
                            onChange={handleInput}
                        />
                        <StyledButton type="submit">Adicionar ao carrinho</StyledButton>
                    </StyledForm>
                </StyledFormWrapper>
            </Container>
        </>
    )
}

export default Pedido
