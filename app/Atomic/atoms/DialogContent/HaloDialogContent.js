import withStyles from '@material-ui/core/styles/withStyles';
import AtomDialogContent from '.';

const AtomHaloDialogContent = withStyles(
  theme => ({
    root: {
      padding: theme.spacing(2),
      // [theme.breakpoints.up('lg')]: {
      //   padding: theme.spacing(4),
      // },
    },
  }),
  { name: 'AtomHaloDialogContent' },
)(AtomDialogContent);
export default AtomHaloDialogContent;
