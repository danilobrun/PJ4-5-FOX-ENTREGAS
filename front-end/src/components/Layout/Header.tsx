import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/img/logo-cifra.png"
import LogoWhite from "../../assets/img/logo-cifra-white.png"
import { CustomButton } from "../CustomButton";

export function Header () {
    const [isTransparent, setIsTransparent] = useState(true)
    useEffect(() => {
        const scrollChange = () => {
            const isLowScroll = window.scrollY < 60
            if (isLowScroll !==  isTransparent) {
                setIsTransparent(isLowScroll)
            }
        }
        window.addEventListener('scroll', scrollChange)
        return () => {
            window.removeEventListener('scroll', scrollChange)
        }
    }, [isTransparent])
    return (
        <Navbar fixed='top' expand="lg" bg={isTransparent ? undefined : 'secondary'}>
            <Container>
                <Navbar.Brand to='/' as={Link}>
                    <ImageStyled src={isTransparent ? Logo : LogoWhite} width={194} height={51} alt="Logo Cifra"/>
                </Navbar.Brand>
                <NavbarToggleStyled aria-controls="basic-navbar-nav">
                    <FontAwesomeIcon icon={faBars} className={isTransparent ? "text-gray" : "text-white"} size="lg" />
                </NavbarToggleStyled>
                <NavbarCollapseStyled id="basic-navbar-nav" className="justify-content-center text-center">
                    <Nav className="ms-auto">
                        <NavLinkStyled forwardedAs={Link} to='/'>Inicio</NavLinkStyled>
                        <CustomButton className="mt-2 mt-lg-0 ms-lg-4">Criar Conta</CustomButton>
                        <CustomButton className="mt-2 mt-lg-0 ms-lg-4">Fazer Login</CustomButton>
                    </Nav>
                </NavbarCollapseStyled>
            </Container>
    </Navbar>
    )
}

const ImageStyled = styled.img`
    @media (min-width: 992px) {
        width: 266px;
        height: auto;
    }
`

const NavbarToggleStyled = styled(Navbar.Toggle)`
    border: none;
`

const NavbarCollapseStyled = styled(Navbar.Collapse)`
    @media (max-width: 991px) {
        background-color: #FFF;
        margin: 0 -12px;
        padding: 1rem 2rem;
    }
`

const NavLinkStyled = styled(Nav.Link)`
 @media (min-width: 992px) {
    color: #FFF !important;
 }
`