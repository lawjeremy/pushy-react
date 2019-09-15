import React, { useContext } from 'react';
import styled from 'styled-components';
import { PushyMenuContext } from '../context/PushyContext';

const Hamburger = styled.button``;

const togglePushy = e => {
  e.preventDefault();
  console.log('toggle pushy');
};

const PushyMenuButton = () => {
  const [pushyIsOpen, setPushyIsOpen] = useContext(PushyMenuContext);
  return (
    <Hamburger onClick={() => setPushyIsOpen(true)}>&#9776; Menu</Hamburger>
  );
};

export default PushyMenuButton;
