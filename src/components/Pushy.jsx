import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PushyMenuButton from './PushyMenuButton';

const PushyNav = styled.nav``;

const PushyContent = styled.div``;

const Pushy = ({ buttonParent, children }) => (
  <PushyNav>
    <PushyMenuButton parentElement={buttonParent} />
    <PushyContent>{children}</PushyContent>
  </PushyNav>
);

Pushy.propTypes = {
  children: PropTypes.node,
  buttonParent: PropTypes.string,
};

Pushy.defaultProps = {
  children: {},
  buttonParent: 'root',
};

export default Pushy;
