import withStyles from '@material-ui/core/styles/withStyles';
import AtomCardMedia from '.';

/* card media tỉ lệ 1:1 */
const AtomCardMediaSquare = withStyles(
  {
    root: {
      height: 0,
      paddingTop: '100%',
      cursor: 'pointer',
    },
  },
  { name: 'AtomCardMediaSquare' },
)(AtomCardMedia);
export default AtomCardMediaSquare;
