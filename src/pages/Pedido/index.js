import React from 'react'
import { Background, PedidoContainer, PedidoContent, PedidoImg } from './PedidoElementos'
import {IntroBtn} from '../Intro/IntroElementos';
import img from '../../images/hamburguer-3.jpg'

const Pedido = (id) => {

    console.log(id);
    return (
        <>
            <Background>
                <PedidoContainer>
                    <PedidoContent>
                        <PedidoImg src={img} />
                        <h1>Cheedar Burguer</h1>
                        <p>(Pão, bife, cebola, piclis, alface, cheedar, bacon)</p>
                        <p>R$25,00</p>
                        <form>

                           <p>Cheedar Burguer <input type="number"></input></p> 
                           <p>Total: R$25,00</p>
                           <IntroBtn type="submit">Adicionar ao carrinho</IntroBtn>
                        </form>
                    </PedidoContent>
                </PedidoContainer>
            </Background>
        </>
    )
}

export default Pedido
