import { Button, Container } from "react-bootstrap";
import { toast } from "react-toastify";
import styled from 'styled-components'

export function HomeView () {
    return (
        <Container>
          <Title>Fox Entregas</Title>
          <Button onClick={() => toast.success('Teste!')}>teste</Button>
        </Container>
    )
}

const Title = styled.p`
  font-size: 3rem;
`