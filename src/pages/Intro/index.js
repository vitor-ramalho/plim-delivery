import React, { useState } from 'react'
import {
    IntroContainer,
    IntroConteudo,
    IntroItens,
    IntroH1,
    IntroP,
    IntroBtn
} from './IntroElementos';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Produtos from '../../components/Produtos';



const Intro = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <IntroContainer>
                <Navbar toggle={toggle} />
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <IntroConteudo>
                    <IntroItens>
                        <IntroH1>Melhor Hamburguer de PL</IntroH1>
                        <IntroP>Plim Hamburgueria</IntroP>
                        <IntroBtn>Faça o seu pedido</IntroBtn>
                    </IntroItens>
                </IntroConteudo>
            </IntroContainer>
            <Produtos />
        </>
    )
}

export default Intro
