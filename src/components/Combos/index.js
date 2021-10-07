import React from 'react'
import { useProducts } from '../../Providers/ProductsProvider';
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
    const { produtos } = useProducts();

    return (
        <ComboContainer>
            <ComboCabecalho>Combos</ComboCabecalho>
            <ComboSection>
                {produtos.filter(produto => produto.tipo === 2).map(combos =>
                    <ComboCard key={combos.id}>
                        <ComboImagem src={combos.img} />
                        <ComboInfo>
                            <ComboTitulo>{combos.nome}</ComboTitulo>
                            <ComboDesc>{combos.descricao}</ComboDesc>
                            <ComboPreco>R$ {combos.valor}</ComboPreco>
                            <ComboBtn to="/pedido" onClick={() => localStorage.setItem('produto_id', combos.id)}>Peça Já</ComboBtn>
                        </ComboInfo>
                    </ComboCard>
                )}
            </ComboSection>

        </ComboContainer>
    )
}

export default Combos
