import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ComboContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    background: #e31837;
    color: #fff;
`;

export const ComboBtn = styled(Link)`
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    background: #fdc500;
    color: #fff;
    transition: 0.2 ease-out;
    cursor: pointer;
    color: #000;
    text-decoration: none;
`;

export const ComboCabecalho = styled.h1`
    font-size: clamp(2rem, 2.5vw,3rem);
    text-align: center;
    margin-bottom: 5rem;
`;

export const ComboSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`;

export const ComboCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;

`;

export const ComboImagem = styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #fdc500;

`;

export const ComboInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`;

export const ComboTitulo = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
`;

export const ComboDesc = styled.p`

margin-bottom: 1rem;
`;

export const ComboPreco = styled.p`

margin-bottom: 1rem;
    font-size: 2rem;
`;

