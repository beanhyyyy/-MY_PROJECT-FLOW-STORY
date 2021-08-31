import withStyles from '@material-ui/core/styles/withStyles';
import AtomCardMedia from '.';

/* card media tỉ lệ 4:3 */
const AtomCardMedia43 = withStyles(
  {
    root: {
      height: 0,
      paddingTop: 'calc(100% * 3 / 4)',
      cursor: 'pointer',
    },
  },
  { name: 'AtomCardMedia43' },
)(AtomCardMedia);
export default AtomCardMedia43;
