import withStyles from '@material-ui/core/styles/withStyles';
import AtomIconButton from '.';

/* nút đỏ viền tròn */
const AtomIconButtonErrorOutlined = withStyles(
  theme => ({
    root: {
      border: `1px solid ${theme.palette.error.main}`,
      color: theme.palette.error.main,
    },
  }),
  { name: 'AtomIconButtonErrorOutlined' },
)(AtomIconButton);
export default AtomIconButtonErrorOutlined;
