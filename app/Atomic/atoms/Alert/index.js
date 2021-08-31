import withStyles from '@material-ui/core/styles/withStyles';
import Alert from '@material-ui/lab/Alert';

const AtomAlert = withStyles(
  () => ({
    root: {
      border: `1px solid`,
    },
    standardSuccess: {
      color: '#4caf50',
      borderColor: '#c8e6c9',
    },
    standardInfo: {
      color: '#0086B7',
      backgroundColor: '#EFFAFF',
      borderColor: '#B1E7FB',
    },
    standardWarning: {
      color: '#724716',
      backgroundColor: '#FFF4E5',
      borderColor: '#FFE5C1',
    },
    standardError: {
      color: '#f44336',
      borderColor: '#ffcdd2',
    },
    message: {
      flex: 1,
    },
  }),
  {
    name: 'AtomAlert',
  },
)(Alert);
export default AtomAlert;
