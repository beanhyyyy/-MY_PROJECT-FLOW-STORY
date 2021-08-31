import withStyles from '@material-ui/core/styles/withStyles';
import AtomIconButton from '.';

/* nút xanh lá */
const AtomIconButtonSuccess = withStyles(
  theme => ({
    root: {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.success.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.success.light,
      },
    },
  }),
  { name: 'AtomIconButtonSuccess' },
)(AtomIconButton);
export default AtomIconButtonSuccess;
