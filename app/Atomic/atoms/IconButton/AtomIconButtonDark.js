import withStyles from '@material-ui/core/styles/withStyles';
import AtomIconButton from '.';

/* nút đen */
const AtomIconButtonDark = withStyles(
  theme => ({
    root: {
      backgroundColor: 'rgba(0, 0, 0, 0.38)',
      color: theme.palette.common.white,
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.54)',
        transition: '.25s',
      },
    },
  }),
  { name: 'AtomIconButtonDark' },
)(AtomIconButton);
export default AtomIconButtonDark;
