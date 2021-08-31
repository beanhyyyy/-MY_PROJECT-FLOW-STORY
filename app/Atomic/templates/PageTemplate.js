import React from 'react';
import PropTypes from 'prop-types';
import AtomContainer from '../atoms/Container';
// import FEAppBar from '../organisms/AppBar/FEAppBar';
// import FEBottomNavigation from '../molecules/Navigation/FEBottomNavigation';
import AtomBox from '../atoms/Box';

/* layout cơ bản của một trang thường, bao gồm header, body và footer (nếu có) */
export default function PageTemplate({
  appBar,
  header,
  body,
  footer,
  bottomNavigation,
  containerProps,
  mainProps,
  headerProps,
  bodyProps
}) {
  return (
    <React.Fragment>
      <AtomContainer {...containerProps}>
        {appBar}
        <AtomBox component="main" {...mainProps}>
          {header && <AtomBox {...headerProps}>{header}</AtomBox>}
          {body && <AtomBox {...bodyProps}>{body}</AtomBox>}
        </AtomBox>
        {footer && <footer>{footer}</footer>}
        {bottomNavigation}
      </AtomContainer>
    </React.Fragment>
  );
}

PageTemplate.propTypes = {
  appBar: PropTypes.any, // menu top
  header: PropTypes.any, // header cover
  body: PropTypes.any, // page body
  footer: PropTypes.any, // page footer (optional)
  bottomNavigation: PropTypes.any, // bottom nav
  containerProps: PropTypes.object, // container Props
  mainProps: PropTypes.object, // main Props
  headerProps: PropTypes.object, // header Props
  bodyProps: PropTypes.object // body Props
};
PageTemplate.defaultProps = {
  appBar: null,
  header: null,
  body: null,
  footer: null,
  bottomNavigation: null
};
