import React from 'react';
import PropTypes from 'prop-types';

const PushyMenuItem = ({ children }) => {
  return (
    <>
      <h1>Pushy Menu Item</h1>
      {children}
    </>
  );
};

PushyMenuItem.propTypes = {
  children: PropTypes.node,
};

PushyMenuItem.defaultProps = {
  children: [],
};

export default PushyMenuItem;
