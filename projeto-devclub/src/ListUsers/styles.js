import styled from "styled-components";

export const Container = styled.div`
  background-color: #181f36;
  min-height: 100vh; /* Corrigido para altura mínima */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
`;

export const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  margin: 30px 0; /* Adicionado margin-bottom para espaçamento uniforme */
`;

export const ContainerUsers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 40px 0;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const CardUsers = styled.div`
  background-color: #252d48;
  padding: 16px;
  border-radius: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  max-width: 380px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adicionado box-shadow para efeito de elevação */

  h3 {
    color: #fff;
    font-size: 24px;
    margin-bottom: 3px;
    text-transform: capitalize;
  }

  p {
    color: #fff;
    font-size: 12px;
    font-weight: 200;
  }
`;

export const TrashIcon = styled.img`
  cursor: pointer;
  transition: opacity 0.2s ease; /* Transição suave para efeito hover e active */

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;

export const Avatar = styled.img`
  height: 80px;
  border-radius: 50%; /* Faz o avatar ficar circular */
`;
