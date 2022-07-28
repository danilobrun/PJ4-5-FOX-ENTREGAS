import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/img/logo-cifra.png"
import { CustomButton } from "../CustomButton";

export function Header () {
    return (
        <Navbar fixed='top' expand="lg">
            <Container>
                <Navbar.Brand to='/' as={Link}>
                    <img src={Logo} width={194} height={51} alt="Logo Cifra"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <NavbarCollapseStyled id="basic-navbar-nav" className="justify-content-center text-center">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <CustomButton>Criar Conta</CustomButton>
                        <CustomButton>Fazer Login</CustomButton>
                    </Nav>
                </NavbarCollapseStyled>
            </Container>
    </Navbar>
    )
}

const NavbarCollapseStyled = styled(Navbar.Collapse)`
    @media (max-width: 991px) {
        background-color: #FFF;
        margin: 0 -12px;
        padding: 1rem 2rem;
    }
`