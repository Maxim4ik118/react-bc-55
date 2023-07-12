import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 7px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  .close-btn {
    position: absolute;
    right: 15px;
    top: 15px;
  }
`;
