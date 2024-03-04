import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 75px;
  background-color: #eceff1; // Um cinza claro para destacar o visor

  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: 24px;
  font-family: "Roboto", sans-serif; // Adicionado sans-serif para fallback

  input {
    width: 100%;
    height: 75px;
    background-color: #546e7a; // Um azul-cinza escuro para o fundo do input
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center; // Ajustado para centralizar o texto horizontalmente
    padding: 0 20px; // Ajustado para dar mais espaço aos lados
    font-size: 24px;
    font-family: "Roboto", sans-serif; // Consistência na fonte e fallback
    color: white; // Mantido para contraste
    text-align: right; // Garante que o texto esteja alinhado à direita
    outline: none; // Remove o contorno ao focar (opcional)
  }
`;
