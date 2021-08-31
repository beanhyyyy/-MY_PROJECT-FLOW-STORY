import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import AtomTabs from '.';

/* tabs có indicator căn giữa */
const AtomTabsIndicatorCenter = withStyles(
  theme => ({
    root: {
      minHeight: theme.spacing(4),
    },
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      height: 3,
      '& > span': {
        maxWidth: 50,
        width: '100%',
        backgroundColor: theme.palette.primary.main,
      },
    },
  }),
  {
    name: 'AtomTabsIndicatorCenter',
  },
)(props => <AtomTabs {...props} TabIndicatorProps={{ children: <span /> }} />);
export default AtomTabsIndicatorCenter;
