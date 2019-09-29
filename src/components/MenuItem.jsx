import React, { useContext } from 'react';
import styled from 'styled-components';

const PushyMenuItemSc = styled.li`
  text-align: left;
  transition: opacity 0.2s ease-in-out;
`;

const MenuItem = ({ children }) => {
  return <PushyMenuItemSc>{children}</PushyMenuItemSc>;
};

export default MenuItem;
