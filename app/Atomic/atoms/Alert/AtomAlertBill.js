import withStyles from '@material-ui/core/styles/withStyles';
import Alert from '@material-ui/lab/Alert';

/* alert cho hóa đơn */
const AtomAlertBill = withStyles(
  theme => ({
    root: {
      border: `2px dashed ${theme.palette.grey[300]}`,
      borderRadius: theme.spacing(0.5),
      backgroundColor: theme.palette.common.white,
      color: 'inherit',
    },
    icon: {
      display: 'none',
    },
    message: {
      flex: 1,
    },
  }),
  {
    name: 'AtomAlertBill',
  },
)(Alert);
export default AtomAlertBill;
