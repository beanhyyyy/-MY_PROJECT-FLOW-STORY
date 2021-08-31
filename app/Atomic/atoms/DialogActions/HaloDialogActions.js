import withStyles from '@material-ui/core/styles/withStyles';
import AtomDialogActions from '.';

const AtomHaloDialogActions = withStyles(
  theme => ({
    root: {
      padding: theme.spacing(2),
      // [theme.breakpoints.up('lg')]: {
      //   padding: theme.spacing(2, 4, 4),
      // },
    },
  }),
  { name: 'AtomDialogActions' },
)(AtomDialogActions);
export default AtomHaloDialogActions;
