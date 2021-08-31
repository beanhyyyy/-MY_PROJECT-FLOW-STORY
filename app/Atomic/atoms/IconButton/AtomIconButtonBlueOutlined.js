import withStyles from '@material-ui/core/styles/withStyles';
import AtomIconButton from '.';

/* nút xanh dương viền tròn */
const AtomIconButtonBlueOutlined = withStyles(
  theme => ({
    root: {
      border: `1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
    },
  }),
  { name: 'AtomIconButtonBlueOutlined' },
)(AtomIconButton);
export default AtomIconButtonBlueOutlined;
