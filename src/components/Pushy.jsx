import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { PushyMenuContext } from '../context/PushyContext';
import defaultTheme from '../themes/default';

const menuWidth = '200px';

const PushyNav = styled.nav`
  position: fixed;
  width: ${menuWidth}
  height: 100%;
  top: 0;
  ${({ right }) => (right ? 'right: 0' : `left: 0`)};
  z-index: 9999;
  background: ${({ theme }) => theme.pushy.background};
  color: ${({ theme }) => theme.pushy.color};
  overflow: auto;
  -webkit-overflow-scrolling: touch; /* enables momentum scrolling in iOS overflow elements */

  a {
    display: block;
    color: ${({ theme }) => theme.pushy.a.color};
    padding: 15px 30px;
    text-decoration: none;
  }

  a:hover {
    color: ${({ theme }) => theme.pushy.a.hover.color};
  }

  ul {
    list-style-type: none;
    list-style-image: none;
    padding: 0;
    margin: 0;s
  }

  ul:first-child {
    margin-top: 10px;
  }

  ${({ right }) =>
    !right &&
    `
  -webkit-transform: translate3d( -${menuWidth} ,0,0);
  -ms-transform: translate3d( -${menuWidth} ,0,0);
  transform: translate3d( -${menuWidth} ,0,0);`}; 

  ${({ right }) =>
    right &&
    `
  -webkit-transform: translate3d( ${menuWidth} ,0,0);
    -ms-transform: translate3d( ${menuWidth} ,0,0);
    transform: translate3d( ${menuWidth} ,0,0);
    `}; 
    transition: transform 0.2s cubic-bezier(0.16, 0.68, 0.43, 0.99);
`;

const PushyContent = styled.div`
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: visibility 0.2s cubic-bezier(0.16, 0.68, 0.43, 0.99);
`;

const SiteOverlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9998;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-animation: fade 500ms;
  animation: fade 500ms;
`;

const Pushy = ({ right, children, theme = {} }) => {
  const [pushyIsOpen, setPushyIsOpen] = useContext(PushyMenuContext);

  const styles = Object.assign(defaultTheme, theme);

  useEffect(() => {
    if (pushyIsOpen) {
      if (right) {
      } else {
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100%';
        document.body.style[
          '-webkit-transform'
        ] = `translate3d( ${menuWidth} ,0,0)`;
        document.body.style[
          '-ms-transform'
        ] = `translate3d( ${menuWidth} ,0,0)`;
        document.body.style['transform'] = `translate3d( ${menuWidth} ,0,0)`;
      }
    } else {
      if (right) {
      } else {
        document.body.style.overflow = 'visible';
        document.body.style['-webkit-transform'] = 'translate3d(0,0,0)';
        document.body.style['-ms-transform'] = 'translate3d(0,0,0)';
        document.body.style['transform'] = 'translate3d(0,0,0)';
      }
    }
    document.body.style['transition'] =
      'transform .2s cubic-bezier(.16, .68, .43, .99)';

    window.addEventListener('keydown', ({ key, code }) => {
      if (key === 'Escape') {
        if (pushyIsOpen) {
          setPushyIsOpen(false);
        }
      }
    });

    return () => {
      window.removeEventListener('keydown', () => {});
    };
  }, [pushyIsOpen, right]);

  return (
    <ThemeProvider theme={styles}>
      <>
        {pushyIsOpen && (
          <SiteOverlay
            onClick={() => {
              if (pushyIsOpen) {
                setPushyIsOpen(false);
              }
            }}
          />
        )}
        <PushyNav isOpen={pushyIsOpen} right={right}>
          <PushyContent isOpen={pushyIsOpen} right={right}>
            <ul>{children}</ul>
          </PushyContent>
        </PushyNav>
      </>
    </ThemeProvider>
  );
};

Pushy.propTypes = {
  children: PropTypes.node,
  right: PropTypes.bool,
};

Pushy.defaultProps = {
  children: [],
  right: false,
};

export default Pushy;
