import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  iconBackground: {
    display: 'inline-flex',
    position: 'relative',
    '&::before': {
      content: '""',
      width: theme.spacing(3),
      height: theme.spacing(3),
      borderRadius: '50%',
      // backgroundColor: '#c2f9ff',
      backgroundColor:
        theme.palette.type === 'light'
          ? 'rgb(134 243 255 / 30%)'
          : theme.palette.action.focus,
      // : 'rgb(36 168 216 / 18%)',
      position: 'absolute',
      top: theme.spacing(0.5),
      left: theme.spacing(1),
      zIndex: 0,
    },
    '& > svg': {
      zIndex: 1,
    },
  },
}));

/* bọc ngoài icon để có style hình tròn xanh bên dưới */
export default function AtomIconBackground({ children }) {
  const classes = useStyles();
  return <span className={classes.iconBackground}>{children}</span>;
}
AtomIconBackground.propTypes = {
  children: PropTypes.any,
};
