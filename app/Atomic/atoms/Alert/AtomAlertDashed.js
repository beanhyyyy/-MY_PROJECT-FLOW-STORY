import withStyles from '@material-ui/core/styles/withStyles';
import Alert from '@material-ui/lab/Alert';

/* alert có border gạch đứt dài */
const AtomAlertDashed = withStyles(
  {
    root: {
      borderStyle: 'dashed',
      borderWidth: 1,
    },
  },
  {
    name: 'AtomAlertDashed',
  },
)(Alert);
export default AtomAlertDashed;
