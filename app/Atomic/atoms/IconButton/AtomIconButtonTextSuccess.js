import withStyles from '@material-ui/core/styles/withStyles';
import AtomIconButton from '.';

/* nút icon màu xanh lá */
const AtomIconButtonTextSuccess = withStyles(
  theme => ({
    root: {
      color: theme.palette.success.main,
    },
  }),
  { name: 'AtomIconButtonTextSuccess' },
)(AtomIconButton);
export default AtomIconButtonTextSuccess;
