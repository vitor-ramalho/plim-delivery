import React, {useState, useEffect} from 'react'
import {
    ProdutosAdicionaisContainer,
    ProdutosAdicionaisCabecalho,
    ProdutosAdicionaisSection,
    ProdutoAdicionalCard,
    ProdutoAdicionalImg,
    ProdutoAdicionalTitulo,
    ProdutoAdicionalDesc,
    ProdutoAdicionalBtn,
    ProdutoAdicionalInfo,
    ProdutoAdicionalPreco
} from './ProdutosAdicionaisElementos';

const ProdutosAdicionais = () => {
    const [produtosAdicionais, setProdutosAdicionais] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3001/outrosProdutos');
            const data = await response.json();
            setProdutosAdicionais(data)
            console.log(data)
        }
        fetchData();
    }, [])
    return (
        <>
            <ProdutosAdicionaisContainer>
                <ProdutosAdicionaisCabecalho>Outros Produtos</ProdutosAdicionaisCabecalho>
                <ProdutosAdicionaisSection>
                    {produtosAdicionais.map(produtosad =>

                        <ProdutoAdicionalCard>
                            <ProdutoAdicionalImg src={produtosad.img} />
                            <ProdutoAdicionalInfo>
                                <ProdutoAdicionalTitulo>{produtosad.nome}</ProdutoAdicionalTitulo>
                                <ProdutoAdicionalDesc>{produtosad.descricao}</ProdutoAdicionalDesc>
                                <ProdutoAdicionalPreco>R$ {produtosad.valor}</ProdutoAdicionalPreco>
                                <ProdutoAdicionalBtn>Peça Já</ProdutoAdicionalBtn>
                            </ProdutoAdicionalInfo>
                        </ProdutoAdicionalCard>
                    )}
                </ProdutosAdicionaisSection>
            </ProdutosAdicionaisContainer>
        </>
    )
}

export default ProdutosAdicionais
