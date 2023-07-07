import styled from 'styled-components';

export const StyledButton = styled.button`
  border-radius: 8px;
  background-color: azure;
  font-size: 18px;
  padding: 12px 20px;
  text-align: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
 
  cursor: pointer;
  transition: box-shadow 0.3s ease, background-color 0.3s ease;
  &:hover,
  &:focus {
    box-shadow: 0px 2px 47px -18px rgba(0, 0, 0, 0.75);
    background-color: rgba(240, 255, 255, 0.8);
  }

  &.no-border {
    border-radius: 0;
    border: none;
  }
  &.primary {
    background-color: rgb(125, 31, 255);
    color: #fff;
    &:hover,
    &:focus {
      background-color: rgba(125, 31, 255, 0.9);
    }
  }
  &.secondary {
    background-color: #ff9e1f;
    color: #000;
    &:hover,
    &:focus {
      background-color: rgba(255, 158, 31, 0.9);
    }
  }
`;
