import styled from "styled-components";

export const Background = styled.div`

    position: fixed;
	/* Stay in place */
	z-index: 1;
	/* Sit on top */
	left: 0;
	top: 0;
	width: 100%;
	/* Full width */
	height: 100%;
	/* Full height */
	overflow: hidden;
	/* Enable scroll if needed */
	background-color: #444444;
	/* Black w/ opacity */
	transition: all 0.5s ease 0.06s;
`;

export const PedidoContainer = styled.div`
    background-color: #fff;
	margin: 15% auto;
	/* 15% from the top and centered */
	padding: 1.2rem;
	max-width: 30%;
	/* Could be more or less, depending on screen size */
	box-shadow: 2px 2px 10px 0px rgba(99, 106, 119, 0.6);
	border-radius: 5px;
`;

export const PedidoImg = styled.img`

`;

export const PedidoContent = styled.div`
    display: flex;
	flex-direction: column;
`;