import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import defaultBackground from '../../../images/pageBackground/CircleBackground.svg';

const useStyles = makeStyles(() => ({
  circleBackground: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    overflow: 'hidden',
    '& img': {
      display: 'block',
      position: 'relative',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      // [theme.breakpoints.down('sm')]: {
      //   objectPosition: 'left',
      // },
    },
  },
}));

/* nền có nhiều vòng tròn */
export default function PageBackground({ image }) {
  const classes = useStyles();
  return (
    <div className={classes.circleBackground}>
      <img src={image} alt="bg" />
    </div>
  );
}
PageBackground.propTypes = {
  image: PropTypes.any,
};
PageBackground.defaultProps = {
  image: defaultBackground,
};
