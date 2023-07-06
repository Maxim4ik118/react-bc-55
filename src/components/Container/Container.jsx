import React from 'react';
import { StyledContainer } from './Container.styled';

function Container({ children, ...restProps }) {
  return <StyledContainer {...restProps}>{children}</StyledContainer>;
}

export default Container;
