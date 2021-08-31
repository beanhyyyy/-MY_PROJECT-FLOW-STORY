import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { useTheme } from '@material-ui/core';

// https://www.npmjs.com/package/overlayscrollbars-react
// https://kingsora.github.io/OverlayScrollbars/#!documentation/options
/* tạo thanh cuộn */
export default function Scrollbar(props) {
  const theme = useTheme();
  const { children, className, disableTheme, ...otherProps } = props;

  return (
    <OverlayScrollbarsComponent
      options={{
        className: clsx(
          !disableTheme &&
            (theme.palette.type === 'light'
              ? 'os-theme-dark'
              : 'os-theme-light'),
          className,
        ),
        scrollbars: {
          autoHide: 'leave',
          autoHideDelay: 0,
          clickScrolling: true,
        },
        overflowBehavior: {
          x: 'hidden',
          y: 'scroll',
        },
      }}
      {...otherProps}
    >
      {children}
    </OverlayScrollbarsComponent>
  );
}
Scrollbar.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any, // truyền chiều cao cho thanh cuộn
  disableTheme: PropTypes.bool, // có theme
};
