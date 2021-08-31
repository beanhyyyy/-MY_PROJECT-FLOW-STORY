import withStyles from '@material-ui/core/styles/withStyles';
import AtomIconButton from '.';

/* nút viền tròn mặc định */
const AtomIconButtonOutlined = withStyles(
  theme => ({
    root: {
      border: `1px solid ${theme.palette.grey[300]}`,
    },
  }),
  { name: 'AtomIconButtonOutlined' },
)(AtomIconButton);
export default AtomIconButtonOutlined;
