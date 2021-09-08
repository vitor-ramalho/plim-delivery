import React, { useState, useEffect } from 'react'
import {
    ProdutoBotao,
    ProdutosCabecalho,
    ProdutoDesc,
    ProdutoTitulo,
    ProdutoInfo,
    ProdutoImagem,
    ProdutoCard,
    ProdutoPreco,
    ProdutosContainer,
    ProdutosSection
} from './ProdutosElementos';


const Produtos = () => {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3001/produtos');
            const data = await response.json();
            setProdutos(data)
            console.log(data)
        }
        fetchData();
    }, [])

    return (
        <>
            <ProdutosContainer>
                <ProdutosCabecalho>Escolha seu predileto</ProdutosCabecalho>
                <ProdutosSection>
                    {produtos.map(produtos =>
                        <ProdutoCard>
                            <ProdutoImagem src={produtos.img} />
                            <ProdutoInfo>
                                <ProdutoTitulo>{produtos.nome}</ProdutoTitulo>
                                <ProdutoDesc>{produtos.descricao}</ProdutoDesc>
                                <ProdutoPreco>{produtos.valor}</ProdutoPreco>
                                <ProdutoBotao to="/pedido"> Peça Já </ProdutoBotao>
                            </ProdutoInfo>
                        </ProdutoCard>
                    )}
                </ProdutosSection>
            </ProdutosContainer>
        </>
    )
}

export default Produtos
