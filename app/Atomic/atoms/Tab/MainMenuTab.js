import { withStyles } from '@material-ui/core';
import AtomTab from '.';

const MainMenuTab = withStyles(
  theme => ({
    root: {
      minWidth: theme.spacing(10),
      fontSize: theme.typography.caption.fontSize,
      color: theme.palette.text.primary,
      textTransform: 'none',
      padding: theme.spacing(0.5, 1.5),
      borderRadius: theme.spacing(0.5),
      [theme.breakpoints.up('xl')]: {
        minWidth: theme.spacing(11),
      },
      '&:hover': {
        backgroundColor: theme.palette.background.default,
      },
    },
    labelIcon: {
      minHeight: theme.spacing(8),
    },
    wrapper: {},
  }),
  {
    name: 'MainMenuTab',
  },
)(AtomTab);

export default MainMenuTab;
