import withStyles from '@material-ui/core/styles/withStyles';
import AtomIconButton from '.';

/* nút đỏ */
const AtomIconButtonRed = withStyles(
  theme => ({
    root: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.error.light,
      },
    },
  }),
  { name: 'AtomIconButtonRed' },
)(AtomIconButton);
export default AtomIconButtonRed;
