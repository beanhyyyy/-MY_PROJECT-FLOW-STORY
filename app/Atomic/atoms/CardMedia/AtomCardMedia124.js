import withStyles from '@material-ui/core/styles/withStyles';
import AtomCardMedia from '.';

/* card media tỉ lệ 12:4 */
const AtomCardMedia124 = withStyles(
  {
    root: {
      paddingTop: 'calc(100% * 4 / 12)',
      cursor: 'pointer',
    },
  },
  { name: 'AtomCardMedia124' },
)(AtomCardMedia);
export default AtomCardMedia124;
