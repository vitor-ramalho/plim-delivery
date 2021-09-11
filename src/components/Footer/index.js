import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Plim Hamburgueria</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Facebook"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Facebook"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Facebook"
                                rel="noopener noreferrer"
                            >
                                <FaWhatsapp />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Facebook"
                                rel="noopener noreferrer"
                            >
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
