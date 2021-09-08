import React from 'react'
import {
    Nav,
    NavLink,
    NavIcon,
    Bars
} from './NavbarElementos';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to="/">Hamburguer</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
