import { Button, ButtonProps } from "react-bootstrap";
import styled from "styled-components";

type Props = ButtonProps & { loading?: boolean }

export function CustomButton (props: Props) {
    return (
        <ButtonStyled {...props}/>
    )
}

const ButtonStyled = styled(Button)`
  border-radius: 100px;
  font-weight: 500;
  padding-left: 50px;
  padding-right: 50px;
  ${props => props.size === 'lg' && `
    font-size: 1.125rem;
  `}
  ${props => (props.variant === 'primary' || !props.variant) && `
    background-color: #1117A3;
    border-color: #1117A3;
    &:hover {
      background-color: #2e33c1;
      border-color: #2e33c1;
    }
  `}
  ${props => props.variant === 'outline-primary' && `
    color: #1117A3;
    border-color: #1117A3;
    &:hover {
      background-color: #2e33c1;
      border-color: #2e33c1;
    }
  `}
`