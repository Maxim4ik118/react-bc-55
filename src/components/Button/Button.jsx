import React from 'react';

import { StyledButton } from './Button.styled';

function Button({ children, ...restProps }) {
  return <StyledButton {...restProps}>{children}</StyledButton>;
}

export default Button;
