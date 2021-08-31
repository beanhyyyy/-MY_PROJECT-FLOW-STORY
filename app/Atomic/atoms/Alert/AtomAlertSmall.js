import withStyles from '@material-ui/core/styles/withStyles';
import Alert from '@material-ui/lab/Alert';

/* alert nhỏ */
const AtomAlertSmall = withStyles(
  theme => ({
    root: {
      padding: theme.spacing(0.5, 1),
    },
    message: {
      padding: 0,
    },
    // các màu
    standardSuccess: {
      color: theme.palette.success.dark,
    },
  }),
  {
    name: 'AtomAlertSmall',
  },
)(Alert);
export default AtomAlertSmall;
