import withStyles from '@material-ui/core/styles/withStyles';
import AtomIconButton from '.';

/* nút màu trắng */
const AtomIconButtonLight = withStyles(
  theme => ({
    root: {
      backgroundColor: 'rgba(255, 255, 255, 0.38)',
      color: theme.palette.text.primary,
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.54)',
      },
    },
  }),
  { name: 'AtomIconButtonLight' },
)(AtomIconButton);
export default AtomIconButtonLight;
