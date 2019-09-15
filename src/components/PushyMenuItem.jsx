import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PushySubMenu = styled.div`
  color: #b3b3b1;
  ul {
    padding-left: 15px;
    transition: max-height 0.2s ease-in-out, visibility 0.2s ease-in-out;

    .pushy-link {
      transition: opacity 0.2s ease-in-out;
    }
  }

  /* Submenu Buttons */

  button {
    width: 100%;
    color: #b3b3b1;
    padding: 15px 30px;
    text-align: left;
    background: transparent;
    border: 0;

    &:hover {
      color: #fff;
    }
  }

  /* Submenu Icon */

  > a,
  > button {
    position: relative;
  }

  > a::after,
  > button::after {
    content: '';
    display: block;
    height: 11px;
    width: 8px;
    position: absolute;
    top: 50%;
    right: 15px;
    background: url('../img/arrow.svg') no-repeat;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    transition: transform 0.2s;
  }
`;

const PushyMenuItem = ({ children }) => {
  return (
    <PushySubMenu>
      <h1>Pushy Menu Item</h1>
      {children}
    </PushySubMenu>
  );
};

PushyMenuItem.propTypes = {
  children: PropTypes.node,
};

PushyMenuItem.defaultProps = {
  children: [],
};

export default PushyMenuItem;
