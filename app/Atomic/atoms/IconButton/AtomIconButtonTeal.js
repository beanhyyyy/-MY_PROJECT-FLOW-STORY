import withStyles from '@material-ui/core/styles/withStyles';
import AtomIconButton from '.';
import { teal200Color, tealColor } from '../../_settings/variables';

/* nút xanh ngọc */
const AtomIconButtonTeal = withStyles(
  theme => ({
    root: {
      backgroundColor: tealColor,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: teal200Color,
      },
    },
  }),
  { name: 'AtomIconButtonTeal' },
)(AtomIconButton);
export default AtomIconButtonTeal;
