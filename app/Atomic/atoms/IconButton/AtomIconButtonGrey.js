import withStyles from '@material-ui/core/styles/withStyles';
import AtomIconButton from '.';

/* nút xám nhạt */
const AtomIconButtonGrey = withStyles(
  theme => ({
    root: {
      backgroundColor:
        theme.palette.type === 'light'
          ? theme.palette.grey[300]
          : theme.palette.background.default,
    },
  }),
  { name: 'AtomIconButtonGrey' },
)(AtomIconButton);
export default AtomIconButtonGrey;
