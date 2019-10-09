import React, { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { PushyMenuContext } from '../context/PushyContext';
import defaultTheme from '../themes/default';

const Hamburger = styled.button`
  width: 100px;
  padding: 10px;
  margin-bottom: 30px;
  background: ${props => props.theme.pushy.menuButton.background};
  color: ${props => props.theme.pushy.menuButton.color};
  font-size: 100%;
  text-align: center;
  cursor: pointer;
  border: 0px;

  &:hover {
    opacity: 0.6;
  }
`;

const PushyMenuButton = ({ theme = {} }) => {
  const [pushyIsOpen, setPushyIsOpen] = useContext(PushyMenuContext);
  const styles = Object.assign(defaultTheme, theme);
  return (
    <ThemeProvider theme={styles}>
      <Hamburger onClick={() => setPushyIsOpen(!pushyIsOpen)}>
        &#9776; Menu
      </Hamburger>
    </ThemeProvider>
  );
};

export default PushyMenuButton;
