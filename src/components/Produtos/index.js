import React, { useState, useEffect } from 'react'
import { useProducts } from '../../Providers/ProductsProvider';
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
    const [pedido, setPedido] = useState({});
    const {produtos} = useProducts();

    //produtos.filter(produto => produto.tipo <= 1 ).map(burguers => console.log(burguers));

    return (
        <>
            <ProdutosContainer>
                <ProdutosCabecalho>Escolha seu predileto</ProdutosCabecalho>
                <ProdutosSection>
                    {produtos.filter(produto => produto.tipo <= 1 ).map(burguers =>
                        <ProdutoCard>
                            <ProdutoImagem src={burguers.img} />
                            <ProdutoInfo>
                                <ProdutoTitulo>{burguers.nome}</ProdutoTitulo>
                                <ProdutoDesc>{burguers.descricao}</ProdutoDesc>
                                <ProdutoPreco>R$ {burguers.valor}</ProdutoPreco>
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
