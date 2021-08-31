import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import AtomTab from '.';

/* tab item có indicator custom căn giữa */
const AtomTabIndicatorCenter = withStyles(
  theme => ({
    root: {
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.subtitle1.fontSize,
      marginRight: theme.spacing(3),
      minWidth: 0,
      minHeight: theme.spacing(4),
      paddingRight: 0,
      paddingLeft: 0,
      '&:focus': {
        opacity: 1,
      },
    },
    selected: {
      fontWeight: theme.typography.fontWeightMedium,
    },
  }),
  {
    name: 'AtomTabIndicatorCenter',
  },
)(props => <AtomTab disableRipple {...props} />);
export default AtomTabIndicatorCenter;
