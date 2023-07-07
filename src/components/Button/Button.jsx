import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './Button.styled';

function Button({ children, variant = 'none', ...restProps }) {
  // "none" | "no-border" | "primary" | "secondary"
  return (
    <StyledButton className={variant} {...restProps}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['none', 'no-border', 'primary', 'secondary']),
};

export default Button;
