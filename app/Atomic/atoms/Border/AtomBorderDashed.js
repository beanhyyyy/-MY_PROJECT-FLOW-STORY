import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import AtomBox from '../Box';

const borderStyles = makeStyles(theme => ({
  borderDashed: {
    borderTop: `1px dashed ${theme.palette.grey[300]}`,
  },
}));

const AtomBorderDashed = props => {
  const classes = borderStyles();
  return <AtomBox className={classes.borderDashed} {...props} />;
};
export default AtomBorderDashed;
