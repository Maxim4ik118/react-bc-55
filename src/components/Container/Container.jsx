import React from 'react';
import PropTypes from 'prop-types';

import { StyledContainer } from './Container.styled';

function Container({ children, ...restProps }) {
  return <StyledContainer {...restProps}>{children}</StyledContainer>;
}
Container.propTypes = {
  children: PropTypes.node,
}



export default Container;
