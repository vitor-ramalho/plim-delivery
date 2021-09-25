import styled from 'styled-components';
import ComboPic from '../../images/hamburguer-3.jpg';

export const ProdutosAdicionaisContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    background: #fdc500;
    color: #fff;
`;

export const ProdutoAdicionalBtn = styled.button`
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    background: #e31837;
    color: #fff;
    transition: 0.2 ease-out;
    cursor: pointer;
    color: #000;
    text-decoration: none;
`;

export const ProdutosAdicionaisCabecalho = styled.h1`
    font-size: clamp(2rem, 2.5vw,3rem);
    text-align: center;
    margin-bottom: 5rem;
`;

export const ProdutosAdicionaisSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`;

export const ProdutoAdicionalCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;

`;

export const ProdutoAdicionalImg = styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #150f0f;

`;

export const ProdutoAdicionalInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`;

export const ProdutoAdicionalTitulo = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
`;

export const ProdutoAdicionalDesc = styled.p`

margin-bottom: 1rem;
`;

export const ComboPreco = styled.p`

margin-bottom: 1rem;
    font-size: 2rem;
`;

export const ProdutoAdicionalPreco = styled.p`
    margin-bottom: 1rem;
    font-size: 2rem;
`;
