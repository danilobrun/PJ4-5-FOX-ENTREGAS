import { Button, Container } from "react-bootstrap";
import styled from 'styled-components'

export function HomeView () {
    return (
        <Container>
          <Title>Fox Entregas</Title>
          <Button>teste</Button>
        </Container>
    )
}

const Title = styled.p`
  font-size: 3rem;
`