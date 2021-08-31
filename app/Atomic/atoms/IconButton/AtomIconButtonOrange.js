import withStyles from '@material-ui/core/styles/withStyles';
import AtomIconButton from '.';

/* nút cam */
const AtomIconButtonOrange = withStyles(
  theme => ({
    root: {
      backgroundColor: theme.palette.warning.main,
      color: theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.palette.warning.light,
      },
    },
  }),
  { name: 'AtomIconButtonOrange' },
)(AtomIconButton);
export default AtomIconButtonOrange;
