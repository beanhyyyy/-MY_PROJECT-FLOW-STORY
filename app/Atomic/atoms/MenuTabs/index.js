import withStyles from '@material-ui/core/styles/withStyles';
import AtomTabs from '../Tabs';

const AtomMenuTabs = withStyles(
  theme => ({
    flexContainer: {
      flexWrap: 'wrap',
      '& > *': {
        marginBottom: theme.spacing(1.5),
        '&:not(:last-child)': {
          marginRight: theme.spacing(1.5),
        },
      },
    },
    indicator: {
      display: 'none',
    },

    /* for mobile web */
    [theme.breakpoints.down('xs')]: {
      flexContainer: {
        overflowX: 'auto',
        justifyContent: 'unset',
        flexWrap: 'nowrap',
      },
    },
  }),
  { name: 'AtomMenuTabs' },
)(AtomTabs);
export default AtomMenuTabs;
