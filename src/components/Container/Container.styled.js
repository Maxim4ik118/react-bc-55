import styled, { css } from 'styled-components';

export const list = css`
  list-style: none;
  padding: 0;
`;

export const StyledContainer = styled.div`
  ${list};
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  @media (max-width: 1024px) {
    margin: 0 auto;
    padding: 0 15px;
  }
`;
