import React, { useState, useEffect } from 'react'
import {
    ComboContainer,
    ComboCabecalho,
    ComboBtn,
    ComboSection,
    ComboCard,
    ComboImagem,
    ComboInfo,
    ComboTitulo,
    ComboDesc,
    ComboPreco
} from './CombosElementos';

const Combos = () => {
    const [combos, setCombos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3001/combos');
            const data = await response.json();
            setCombos(data)
            console.log(data)
        }
        fetchData();
    }, [])

    return (
        <ComboContainer>
            <ComboCabecalho>Combos</ComboCabecalho>
            <ComboSection>
                {combos.map(combos =>

                    <ComboCard>
                        <ComboImagem src={combos.img}/>
                        <ComboInfo>
                            <ComboTitulo>{combos.nome}</ComboTitulo>
                            <ComboDesc>{combos.descricao}</ComboDesc>
                            <ComboPreco>R$ {combos.valor}</ComboPreco>
                            <ComboBtn>Peça Já</ComboBtn>
                        </ComboInfo>
                    </ComboCard>
                )}
            </ComboSection>

        </ComboContainer>
    )
}

export default Combos
