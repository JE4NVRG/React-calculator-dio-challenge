import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 20px;
  border: none; // Opção para um design mais flat, ou ajuste a cor se preferir manter
  background-color: #78909c; // Exemplo de cor mais suave, um azul-cinza
  color: white; // Mantido para contraste
  font-size: 24px;
  font-weight: 700;
  flex: 1;

  &:hover {
    background-color: #62727b; // Escurece um pouco no hover para feedback visual
    opacity: 0.8; // Ajustado para uma transição mais suave
  }
`;
