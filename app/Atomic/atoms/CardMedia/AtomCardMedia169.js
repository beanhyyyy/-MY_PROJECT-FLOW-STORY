import withStyles from '@material-ui/core/styles/withStyles';
import AtomCardMedia from '.';

/* card media tỉ lệ 16:9 */
const AtomCardMedia169 = withStyles(
  {
    root: {
      height: 0,
      paddingTop: 'calc(100% * 9 / 16)',
      cursor: 'pointer'
    }
  },
  { name: 'AtomCardMedia169' }
)(AtomCardMedia);
export default AtomCardMedia169;
