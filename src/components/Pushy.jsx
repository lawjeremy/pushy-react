import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PushyMenuContext } from '../context/PushyContext';

const PushyNav = styled.nav`
  position: fixed;
  width: 200px;
  height: 100%;
  top: 0;
  z-index: 9999;
  background: #191918;
  color: #b3b3b1;
  overflow: auto;
  -webkit-overflow-scrolling: touch; /* enables momentum scrolling in iOS overflow elements */

  a {
    display: block;
    color: #b3b3b1;
    padding: 15px 30px;
    text-decoration: none;
  }

  a:hover {
    color: #fff;
  }

  ul:first-child {
    margin-top: 10px;
  }

  &.pushy-left {
    left: 0;
  }

  &.pushy-right {
    right: 0;
  }
`;

const PushyContent = styled.div``;

const Pushy = ({ children }) => {
  const [isOpen] = useContext(PushyMenuContext);
  console.log({ isOpen });
  return (
    <PushyNav>
      <PushyContent>{children}</PushyContent>
    </PushyNav>
  );
};

Pushy.propTypes = {
  children: PropTypes.node,
};

Pushy.defaultProps = {
  children: [],
};

export default Pushy;
