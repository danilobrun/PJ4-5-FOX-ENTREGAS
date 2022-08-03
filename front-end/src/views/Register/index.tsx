import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CustomButton } from "../../components/CustomButton";
import { FormField } from "../../components/FormField";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";

export function RegisterView () {
    return (
        <Layout>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={4}>
                        <PageTitle>Nova Conta</PageTitle>
                        <Form>
                            <FormField
                                label="Nome"
                                placeholder="Digite aqui seu nome"
                                controlId="input-name"
                            />
                            <FormField
                                label="E-mail"
                                placeholder="Ele será seu ususário"
                                controlId="input-email"
                                type="email"
                            />
                            <FormField
                                label="Telefone"
                                placeholder="(00) 00000-0000"
                                controlId="input-phone"
                                mask={[
                                    { mask: '(00) 0000-0000' },
                                    { mask: '(00) 00000-0000' },
                                ]}
                            />
                            <FormField
                                label="Senha"
                                placeholder="Informe sua senha de acesso"
                                controlId="input-password"
                                type="password"
                            />
                            <Form.Group className="mb-3" controlId="input-agree">
                                <Form.Check
                                    type="checkbox"
                                    label={<>Eu li e aceito os <a href="/termos-de-uso.pdf" target="_blank">Termos de Uso.</a></>}
                                />
                            </Form.Group>
                            <div className="d-grid mb-4">
                                <CustomButton>
                                    Criar conta
                                </CustomButton>
                            </div>
                            <p className="text-center">Já possui contar?<br/> <Link to='/login'>Entrar</Link></p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}