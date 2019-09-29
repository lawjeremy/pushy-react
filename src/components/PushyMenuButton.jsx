import React, { useContext } from 'react';
import styled from 'styled-components';
import { PushyMenuContext } from '../context/PushyContext';

const Hamburger = styled.button`
  width: 100px;
  padding: 10px;
  margin-bottom: 30px;
  background: #000;
  color: #fff;
  font-size: 100%;
  text-align: center;
  cursor: pointer;
  border: 0px;

  &:hover {
    opacity: 0.6;
  }
`;

const PushyMenuButton = () => {
  const [pushyIsOpen, setPushyIsOpen] = useContext(PushyMenuContext);
  return (
    <Hamburger onClick={() => setPushyIsOpen(!pushyIsOpen)}>
      &#9776; Menu
    </Hamburger>
  );
};

export default PushyMenuButton;
