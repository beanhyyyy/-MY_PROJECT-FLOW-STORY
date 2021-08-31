import withStyles from '@material-ui/core/styles/withStyles';
import AtomIconButton from '.';

/* nút icon nhỏ */
const AtomIconButtonSmall = withStyles(
  theme => ({
    root: {
      padding: theme.spacing(0.75),
    },
  }),
  { name: 'AtomIconButtonSmall' },
)(AtomIconButton);
export default AtomIconButtonSmall;
