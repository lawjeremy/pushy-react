import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Hamburger = styled.a``;

const togglePushy = e => {
  e.preventDefault();
  console.log('toggle pushy');
};

const PushyMenuButton = ({ parentElement }) => {
  const parent = document.getElementById(parentElement);
  if (!parent) return null;

  return ReactDOM.createPortal(
    <>
      <Hamburger href="#" onClick={togglePushy}>
        <svg
          id="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="7.9"
          height="10.9"
          viewBox="0 0 7.9 10.9"
        >
          <title>arrow</title>
          <path
            id="arrow"
            data-name="arrow"
            d="M8,5.5L1.9,11,0.1,9.4,4.4,5.6,0.1,1.8,2,0.1,8,5.5"
            transform="translate(-0.1 -0.1)"
            fill="#b3b3b1"
          />
        </svg>
      </Hamburger>
    </>,
    parent,
  );
};

export default PushyMenuButton;
