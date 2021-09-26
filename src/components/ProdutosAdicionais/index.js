import React from 'react'
import { useProducts } from '../../Providers/ProductsProvider';
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
    const { produtos } = useProducts();

    return (
        <>
            <ProdutosAdicionaisContainer>
                <ProdutosAdicionaisCabecalho>Outros Produtos</ProdutosAdicionaisCabecalho>
                <ProdutosAdicionaisSection>
                    {produtos.filter(produto => produto.tipo >= 3).map(produtosad =>

                        <ProdutoAdicionalCard key={produtosad.id}>
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
