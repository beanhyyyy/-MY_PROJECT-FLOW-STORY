import React from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import mulishFontfaces from '../utils/mulishFontfaces';
import { colorTypo } from '../Atomic/_settings/variables';

// https://material-ui.com/customization/palette/#dark-mode
/* https://material-ui.com/customization/globals/#global-css */
export default function HaloThemeProvider(props) {
  const { children, theme } = props;

  const defaultTheme = React.useMemo(() =>
    createTheme({
      // direction: rtl ? 'rtl' : 'ltr', // chuyển đổi hướng bố cục
      direction: 'ltr', // chuyển đổi hướng bố cục

      typography: {
        fontFamily: [
          'Mulish',
          '-apple-system', // mac OS , iOS
          'BlinkMacSystemFont',
          '"Segoe UI"', // window
          'Roboto', // android
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"'
        ].join(',')
      },
      /* ghi đè lại font face */
      overrides: {
        MuiCssBaseline: {
          '@global': {
            '*': {
              'scrollbar-width': 'thin'
            },
            '*::-webkit-scrollbar': {
              width: 6
            },
            '*::-webkit-scrollbar-track': {
              '-webkit-border-radius': 10,
              background: '#f5f5f5'
            },
            '*::-webkit-scrollbar-thumb': {
              '-webkit-border-radius': 10,
              borderRadius: 10,
              background: '#bdbdbd'
            },
            '@font-face': mulishFontfaces,
            body: {
              overflowX: 'hidden',
              // backgroundColor: darkMode ? '#212121' : '#FAFAFB'
              backgroundColor: '#FAFAFB',
              // minHeight: '110vh'
            },
            strong: {
              fontWeight: 600
            },
            b: {
              fontWeight: 600
            },
            a: {
              color: '#24a8d8'
            }
          }
        }
      },
      palette: {
        // type: darkMode ? 'dark' : 'light',
        type: 'light',
        primary: {
          light: colorTypo,
          main: colorTypo,
          dark: colorTypo,
          contrastText: '#fff'
        },
        success: {
          light: '#3bcf88',
          main: '#0ac46b',
          dark: '#07894a',
          contrastText: '#fff'
        }
      }
    })
  );

  return (
    <ThemeProvider theme={theme || defaultTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
HaloThemeProvider.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.any
};
HaloThemeProvider.defaultProps = {};
