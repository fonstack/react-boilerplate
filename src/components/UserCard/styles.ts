import styled from 'styled-components';

export const StyledUserCard = styled.div<{ marked: boolean }>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border: 4px solid;
  border-color: ${({ marked }) => (marked ? 'blue' : 'black')};
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    opacity: 0.6;
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  img {
    width: 100px;
    height: 100px;
  }
`;
