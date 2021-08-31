import withStyles from '@material-ui/core/styles/withStyles';
import AtomCardMedia from '.';

/* card media tỉ lệ 3:4 */
const AtomCardMedia34 = withStyles(
  {
    root: {
      height: 0,
      paddingTop: 'calc(100% * 4 / 3)',
      cursor: 'pointer',
    },
  },
  { name: 'AtomCardMedia34' },
)(AtomCardMedia);
export default AtomCardMedia34;
