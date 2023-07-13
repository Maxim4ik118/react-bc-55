import { styled } from 'styled-components';

export const StyledBookShelf = styled.div`
  display: flex;
  position: relative;
  .left {
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    flex-shrink: 1;
    flex-basis: auto;
  }
  .right {
    top: 0;
    right: 0;
    position: sticky;
    overflow: overlay;
    padding: 0 15px;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
  }
`;
