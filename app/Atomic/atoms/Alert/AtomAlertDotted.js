import withStyles from '@material-ui/core/styles/withStyles';
import Alert from '@material-ui/lab/Alert';

/* alert có border chấm đứt */
const AtomAlertDotted = withStyles(
  {
    root: {
      borderStyle: 'dotted',
      borderWidth: 1,
    },
  },
  {
    name: 'AtomAlertDotted',
  },
)(Alert);
export default AtomAlertDotted;
