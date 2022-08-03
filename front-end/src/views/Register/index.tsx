import { Container } from "react-bootstrap";
import { FormField } from "../../components/FormField";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";

export function RegisterView () {
    return (
        <Layout>
            <Container>
                <PageTitle>Nova Conta</PageTitle>
                <FormField 
                controlId="userName"
                label="name"
                placeholder="Digite o seu nome"
                error="Preencha o seu nome."
                isInvalid
                mask={[
                    {mask: '000.000.000-00'}
                ]}/>
            </Container>
        </Layout>
    )
}