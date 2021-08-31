import withStyles from '@material-ui/core/styles/withStyles';
import Alert from '@material-ui/lab/Alert';

/* alert có border chấm đứt */
const AtomAlertPromotion = withStyles(
  {
    root: {
      borderStyle: 'dotted',
      borderWidth: 1,
      backgroundColor: '#FFFAFA',
    },
    message: {
      flexGrow: 1,
    },
  },
  {
    name: 'AtomAlertPromotion',
  },
)(Alert);
export default AtomAlertPromotion;
