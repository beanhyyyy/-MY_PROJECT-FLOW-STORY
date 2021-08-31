import withStyles from '@material-ui/core/styles/withStyles';
import AtomIconButton from '.';

/* nút xanh dương */
const AtomIconButtonBlue = withStyles(
  theme => ({
    root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
    },
  }),
  { name: 'AtomIconButtonBlue' },
)(AtomIconButton);
export default AtomIconButtonBlue;
