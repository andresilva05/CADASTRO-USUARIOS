// src/components/Button/styles.js
import styled from "styled-components";

const Button = styled.button`
  border: ${props => props.theme === 'primary' ? 'none' : '1px solid #fff'} ;
  background: ${props => props.theme === 'primary' ? 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)' : 'transparent'};
  font-size: 16px;
  color: #fff;
  padding: 16px 32px;
  width: fit-content;
  cursor: pointer;
  border-radius: 30px;

  &:hover {
  /* Define a opacidade de acordo com o tema */
  opacity: ${props => props.theme === 'primary' ? '0.8' : '1'};
  
  /* Define a cor de fundo apenas se o tema for diferente de 'primary' */
  background-color: ${props => props.theme !== 'primary' ? 'green' : 'initial'};
}

  &:active {
    opacity: 0.5;
  }
`;

export default Button; // Apenas a exportação padrão
