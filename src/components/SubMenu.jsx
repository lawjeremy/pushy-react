import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PushySubMenuSc = styled.ul`
  > ul {
    padding-left: 15px;
    transition: max-height 0.2s ease-in-out, visibility 0.2s ease-in-out;
  }
`;

const HeaderButtonSc = styled.button`
  width: 100%;
  color: #b3b3b1;
  font-size: 100%;
  padding: 15px 30px;
  text-align: left;
  background: transparent;
  border: 0;
  position: relative;

  &:hover {
    color: #fff;
  }

  ::after {
    content: '';
    display: block;
    height: 11px;
    width: 8px;
    position: absolute;
    top: 50%;
    right: 15px;
    background: url('data:image/svg+xml;utf8,%20%3Csvg%0A%20%20id%3D%22arrow%22%0A%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%0A%20%20width%3D%227.9%22%0A%20%20height%3D%2210.9%22%0A%20%20viewBox%3D%220%200%207.9%2010.9%22%0A%3E%0A%20%20%3Ctitle%3Earrow%3C%2Ftitle%3E%0A%20%20%3Cpath%0A%20%20%20%20id%3D%22arrow%22%0A%20%20%20%20data-name%3D%22arrow%22%0A%20%20%20%20d%3D%22M8%2C5.5L1.9%2C11%2C0.1%2C9.4%2C4.4%2C5.6%2C0.1%2C1.8%2C2%2C0.1%2C8%2C5.5%22%0A%20%20%20%20transform%3D%22translate(-0.1%20-0.1)%22%0A%20%20%20%20fill%3D%22%23b3b3b1%22%0A%20%20%2F%3E%0A%3C%2Fsvg%3E')
      no-repeat;
    ${({ isOpen }) =>
      !isOpen &&
      `
      -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  
      
    `};

    ${({ isOpen }) =>
      isOpen &&
      `
      -webkit-transform: translateY(-50%) rotate(90deg);
      -ms-transform: translateY(-50%) rotate(90deg);
      transform: translateY(-50%) rotate(90deg);
  `};

  transition: transform 0.2s;
`;

const BodySc = styled.ul`
  ${({ isOpen }) =>
    isOpen &&
    `
      max-height: 1000px;
      visibility: visible;
      `};

  ${({ isOpen }) =>
    !isOpen &&
    `
        max-height: 0;
      overflow: hidden;
      visibility: hidden;
        `};

  li {
    text-align: left;
  }
`;

const SubMenu = ({ title, open = true, children }) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <li>
      <PushySubMenuSc>
        <HeaderButtonSc isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {title}
        </HeaderButtonSc>
        <BodySc isOpen={isOpen}>{children}</BodySc>
      </PushySubMenuSc>
    </li>
  );
};

SubMenu.propTypes = {
  children: PropTypes.node,
};

SubMenu.defaultProps = {
  children: [],
};

export default SubMenu;
